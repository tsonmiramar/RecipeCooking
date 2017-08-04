import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guard/auth.guard';
import { SigninGuard } from '../_guard/signin.guard';

import { RecipesComponent} from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/signin', pathMatch: 'full'},
      {path: 'shopping-list', component: ShoppingListComponent, canActivate:[AuthGuard]},
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent, canActivate:[SigninGuard]}
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 

}
