import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Recipe } from './recipe.model';
=======

>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
<<<<<<< HEAD
  
  currentDisplayRecipe: Recipe;
=======
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
  
  setCurrentDisplayRecipe(recipe: Recipe){
    this.currentDisplayRecipe = recipe;
  }
=======

>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
}
