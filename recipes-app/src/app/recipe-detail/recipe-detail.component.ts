import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeDetails } from '../recipe/recipe.model';
import { firstValueFrom, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe!: Observable<RecipeDetails | undefined>;


constructor(
  private recipeService: RecipeService,
  private route: ActivatedRoute
){}


ngOnInit() {
  this.route.paramMap.subscribe((params) => {
    const id = params.get("id");
    if (id) {
      this.recipe = this.recipeService.getRecipeById(id);
    }
  });
}

}
