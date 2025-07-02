import { Injectable } from "@angular/core";
import {  MOCK_RECIPES, MOCK_RECIPE_DETAIL } from "./mock-recipes";
import { Recipe, RecipeDetails } from "./recipe.model";
import { HttpClient } from "@angular/common/http";
import { map,forkJoin, Observable , firstValueFrom } from "rxjs";


interface MealDBResponse {
  meals: any[];
}

@Injectable({ providedIn: 'root' })
export class RecipeService {

   apiUrlCategories="www.themealdb.com/api/json/v1/1/filter.php?c=${category}"
   apiUrlDetail="www.themealdb.com/api/json/v1/1/lookup.php?i=${id}"
   apiUrlRandom="https://www.themealdb.com/api/json/v1/1/random.php"

constructor(
  private httpClient:HttpClient
){}

async getRecipes(category: string) {
  const recipes = await firstValueFrom(this.getRecipesAPI(category));
  MOCK_RECIPES.length=0;
  MOCK_RECIPES.push(...recipes)
}

getRecipeById(id: string): Observable<RecipeDetails | undefined> {
  return this.httpClient
    .get<MealDBResponse>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .pipe(
      map(res => {
        const meal = res.meals?.[0];
        if (!meal) return undefined;

        return {
          id: meal.idMeal,
          title: meal.strMeal,
          category: meal.strCategory,
          ingredients: this.buildIngredients(meal),
          steps: meal.strInstructions.split('\r\n'),
          img:meal.strMealThumb
        };
      })
    );
}

getRecipesAPI(category: string): Observable<Recipe[]> {
  if (category === "meat") {
    const meats: string[] = ["Chicken", "Goat", "Lamb", "Pork"];
    const requests = meats.map(meat =>
      this.httpClient.get<MealDBResponse>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meat}`)
    );

    return forkJoin(requests).pipe(
      map(responses =>
        responses.flatMap(res => 
          (res.meals || []).map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: category,
            img: meal.strMealThumb
          }))
        )
      )
    );
  } else {
    return this.httpClient
      .get<MealDBResponse>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .pipe(
        map(res =>
          (res.meals || []).map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: category,
            img: meal.strMealThumb
          }))
        )
      );
  }
}

buildIngredients(meal:any): string[]{
  const ingredients: string[]=[]
  for(let i=1;i<22;i++){
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if( ingredient===""||ingredient===null){
      break
    }
    ingredients.push(`${measure} ${ingredient}`.trim())
  }
  return ingredients;
}

async searchRecipesByTitle(title: string) {
  const recipes = await firstValueFrom(
    this.httpClient
      .get<MealDBResponse>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
      .pipe(
        map(res =>
          (res.meals || []).map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: meal.strCategory,
            img: meal.strMealThumb
          }))
        )
      )
  );
  MOCK_RECIPES.length = 0;
  MOCK_RECIPES.push(...recipes);
  console.log(MOCK_RECIPES)
}

async getRecommendations(): Promise<Recipe[]>{
  const recommendRecipes=[];
  for(let i=0;i<5;i++){
    const recipe=await this.getRandomRecipe();
    recommendRecipes.push(recipe);
  }
  return recommendRecipes;
}


async getRandomRecipe(): Promise<Recipe> {
  const recipes = await firstValueFrom(
    this.httpClient.get<MealDBResponse>(this.apiUrlRandom).pipe(
      map(res =>
        (res.meals || []).map(meal => ({
          id: meal.idMeal,
          title: meal.strMeal,
          category: meal.strCategory,
          img: meal.strMealThumb
        }))
      )
    )
  );

  return recipes[0];
}
}
