import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [RouterModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
@Input({required:true}) title!: string;
@Input({required:true}) id!:string;
@Input({required:true}) img!:string;



}
