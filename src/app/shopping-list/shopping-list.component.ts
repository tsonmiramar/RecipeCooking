import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
<<<<<<< HEAD
  ingredients: Ingredient[] = [];
=======
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

  constructor() { }

  ngOnInit() {
  }

}
