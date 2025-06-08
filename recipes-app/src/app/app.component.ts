import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HeaderComponent, RecipeListComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes-app';
}
