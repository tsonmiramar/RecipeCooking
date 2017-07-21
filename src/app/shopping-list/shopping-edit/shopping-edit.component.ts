import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient = new Ingredient('',0);
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  
  onAddIngredient(){
    this.shoppingListService.addAndEmitIngredients(new Ingredient(this.ingredient.name,this.ingredient.amount));   
  }
}
