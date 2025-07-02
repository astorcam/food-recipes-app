import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { MOCK_RECIPES } from '../recipe/mock-recipes';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recommendRecipes!: Recipe[];
  pastaRecipes!: Recipe[];
  veganRecipe!: Recipe;
  fishRecipe!: Recipe;

   constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  
async ngOnInit() {
  this.pastaRecipes=await firstValueFrom(this.recipeService.getRecipesAPI("pasta"));
  const veganRecipes=await firstValueFrom(this.recipeService.getRecipesAPI("vegan"));
  const fishRecipes=await firstValueFrom(this.recipeService.getRecipesAPI("seafood"));
  const randomVegan = Math.floor(Math.random() * veganRecipes.length);
  this.veganRecipe=veganRecipes[randomVegan];
  const randomFish = Math.floor(Math.random() * fishRecipes.length);
  this.fishRecipe=fishRecipes[randomFish];
  this.recommendRecipes=await this.recipeService.getRecommendations();
}
}
