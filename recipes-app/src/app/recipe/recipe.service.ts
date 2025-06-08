import { Injectable } from "@angular/core";
import { RECIPES } from "./mock-recipes";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })
export class RecipeService {
  getRecipes(): Recipe[] {
    return RECIPES;
  }

   getRecipeById(id: string): Recipe | undefined {
    return RECIPES.find(r => r.id === id);
  }
}
