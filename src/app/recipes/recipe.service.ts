import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('hello',1),
        new Ingredient('hello2', 2)
      ]
    ),
    new Recipe('Another Test Recipe', 'This is simply another test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('world', 1),
        new Ingredient('world2', 2)
      ]
    )
  ];   

  constructor(private shoppingListService: ShoppingListService){};

  getRecipe(){
      return this.recipes.slice();
  }

  getRecipebyId(id: number){
    return this.recipes[id];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]){
    ingredients.forEach(element => {
      this.shoppingListService.pushIngredient(element);
    });

    this.shoppingListService.addedIngredient.next(this.shoppingListService.getIngredients());
  }
} 