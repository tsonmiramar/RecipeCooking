<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
<<<<<<< HEAD
  ingredient: Ingredient;
  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();
=======
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
  
  onAddIngredient(){
    this.ingredientAddedEvent.emit(this.ingredient);
  }
=======

>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
}
