import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { AuthGuard } from '../_guard/auth.guard';

const shoppingListRoute : Routes = [
  {path: 'shopping-list', component: ShoppingListComponent, canActivate:[AuthGuard]},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingListRoute)
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
  declarations: []
})
export class ShoppingListRoutingModule { }
