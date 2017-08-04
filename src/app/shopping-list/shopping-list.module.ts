import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule
  ],
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
