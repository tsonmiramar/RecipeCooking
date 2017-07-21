import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.getRecipebyId(this.recipeId);
    });
  }

  addToShoppingList(){
      this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
