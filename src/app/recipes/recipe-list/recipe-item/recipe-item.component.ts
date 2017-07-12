<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
<<<<<<< HEAD
  
  @Input() recipe: Recipe;
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
=======
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  onRecipeItemClick(){
      this.recipeSelectedEvent.emit(this.recipe);
    }
=======
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
}
