import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class RecipeService{
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];   

  constructor(private shoppingListService: ShoppingListService){};

  getRecipe(){
      return this.recipes.slice();
  }

  getRecipebyId(id: number){
    return this.recipes[id];
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipe());
  }
  setRecipebyId(id: number, newRecipe:Recipe){
    this.recipes[id] = newRecipe;
    this.recipesChanged.next(this.getRecipe());
  }

  addNewRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipe());
  }

  deleteRecipe(id: number){
    this.recipes.splice(id,1);
    this.recipesChanged.next(this.getRecipe());
  }
  
  addIngredientToShoppingList(ingredients: Ingredient[]){
    ingredients.forEach(element => {
      this.shoppingListService.pushIngredient(element);
    });

    this.shoppingListService.ingredientChanged.next(this.shoppingListService.getIngredients());
  }
} 