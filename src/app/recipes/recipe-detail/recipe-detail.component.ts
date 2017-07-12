<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
<<<<<<< HEAD
  
  @Input() recipe: Recipe;
=======
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

  constructor() { }

  ngOnInit() {
  }

}
