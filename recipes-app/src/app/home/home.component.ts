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

   constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  
async ngOnInit() {
  this.pastaRecipes=await firstValueFrom(this.recipeService.getRecipesAPI("pasta"));
  const veganRecipse=await firstValueFrom(this.recipeService.getRecipesAPI("vegan"));
  const random = Math.floor(Math.random() * veganRecipse.length);
  this.veganRecipe=veganRecipse[random];
  this.recommendRecipes=await this.recipeService.getRecommendations();
}
}
