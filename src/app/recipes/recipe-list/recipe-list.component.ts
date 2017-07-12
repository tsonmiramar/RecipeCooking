<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
<<<<<<< HEAD
    new Recipe('Another Test Recipe', 'This is simply another test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  
  @Output() recipeChosenEvent = new EventEmitter<Recipe>();
=======
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  retrieveSelectedRecipeItem(recipe: Recipe){
    this.recipeChosenEvent.emit(recipe);
  }
=======
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
}
