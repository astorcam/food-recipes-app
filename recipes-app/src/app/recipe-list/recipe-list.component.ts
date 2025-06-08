import { Component } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';



@Component({
  selector: 'app-recipe-list',
  imports: [RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})


export class RecipeListComponent {
 recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  } 
}
