import { Component, Input } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MOCK_RECIPES } from '../recipe/mock-recipes';



@Component({
  selector: 'app-recipe-list',
  imports: [RecipeComponent, CommonModule ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})


export class RecipeListComponent {
  @Input({required:true}) category!:string
  recipeList!: Promise<Recipe[]>;
  

    constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

    ngOnInit() {
  this.route.paramMap.subscribe(async (params) => {
    const title = params.get("title")?.toLowerCase();
    this.category = (params.get("category") || "breakfast").toLowerCase();

    if (title) {
      await this.recipeService.searchRecipesByTitle(title);
      this.recipeList = Promise.resolve(MOCK_RECIPES);
      this.category=title;
    } else {
      await this.recipeService.getRecipes(this.category);
      this.recipeList = Promise.resolve(MOCK_RECIPES);
    }
  });
}
}
