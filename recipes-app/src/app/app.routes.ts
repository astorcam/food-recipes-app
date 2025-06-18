import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
export const routes: Routes = [
    {path:'', redirectTo:"/recipes/breakfast", pathMatch:'full'},
    { path: 'recipes/:category', component: RecipeListComponent },
    { path: 'recipes/detail/:id', component: RecipeDetailComponent },
    { path: 'recipes/searched/:title', component: RecipeListComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
