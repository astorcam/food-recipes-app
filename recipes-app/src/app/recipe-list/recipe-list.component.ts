import { Component, Input } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-list',
  imports: [RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})


export class RecipeListComponent {
  @Input({required:true}) category!:string
 recipeList: Recipe[] = [];

    constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const category=params.get("category")||"all".toLowerCase();
      const allRecipes = this.recipeService.getRecipes();
      if(category==="all"){
        this.recipeList = allRecipes;
    }
      else{
        this.recipeList = allRecipes.filter(recipe=>recipe.category.toLowerCase()===category);
    }
    })
  } 
  
}
