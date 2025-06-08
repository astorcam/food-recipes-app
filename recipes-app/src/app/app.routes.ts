import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
export const routes: Routes = [
    {path:'', redirectTo:"/recipes/all", pathMatch:'full'},
    { path: 'recipes/:category', component: RecipeListComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
