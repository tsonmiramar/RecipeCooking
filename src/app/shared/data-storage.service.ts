import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs';
import { Http, Response } from '@angular/http'

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

  saveData(){
    let authToken:string = this.authService.getToken();
    this.http.put('https://recipecooking-fce59.firebaseio.com/recipes.json?auth='+authToken,this.recipeService.getRecipe())
    .subscribe((response: Response)=>{
      if ( response.status === 200 ){
        alert('Save Data Successfully!');
      }
      else {
        alert ('Failed to Save Data');
      }
    });
  }

  fetchData(){
    let authToken:string = this.authService.getToken();
    this.http.get('https://recipecooking-fce59.firebaseio.com/recipes.json?auth='+authToken)
    .map((response:Response)=>{
      const recipes: Recipe[] = response.json();
      for ( let recipe of recipes){
        if (!recipe.ingredients){
          recipe.ingredients = [];
        }
      }
      return recipes;
    })
    .subscribe((recipes: Recipe[])=>{
        this.recipeService.setRecipes(recipes);
    });
  }
}
