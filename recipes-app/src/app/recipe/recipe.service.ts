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
  
  const request =this.httpClient
      .get<MealDBResponse>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .pipe(
        map(res =>
          (res.meals || []).map(meal => ({
            id: meal.idMeal,
            title: meal.strMeal,
            category: meal.strCategory,
            img:meal.strMealThumb
          }))
        )
      );

  return request
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

}
