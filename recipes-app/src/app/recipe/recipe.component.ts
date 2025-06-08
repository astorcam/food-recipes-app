import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
@Input({required:true}) title!: string;
@Input({required:true}) description!: string;
@Input({required:true}) id!:string;

 get imagePath(){
  return this.id + ".jpg"
 }

}
