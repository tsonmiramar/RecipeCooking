import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient;
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  
  onAddIngredient(){
    this.ingredientAddedEvent.emit(this.ingredient);
  }
}
