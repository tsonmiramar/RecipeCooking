import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
  ingredient: Ingredient = new Ingredient('',0);
  constructor() { }

  ngOnInit() {
  }
  
  onAddIngredient(){
    this.ingredientAddedEvent.emit(new Ingredient(this.ingredient.name,this.ingredient.amount));   
  }
}
