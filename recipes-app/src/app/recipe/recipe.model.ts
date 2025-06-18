export interface Recipe {
  id: string;
  title: string;
  category: string;
  img:string;

}
export interface RecipeDetails {
  id: string;
  title: string;
  category: string;
  ingredients:string[];
  steps:string[];
  img:string;
}