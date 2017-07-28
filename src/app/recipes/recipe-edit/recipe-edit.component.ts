import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode: boolean = false;

  recipeEditForm: FormGroup;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.recipeId = +params['id'];
      this.editMode = params['id'] != null;
      this.buildForm(); 
    });
  }

  private buildForm(){
    let editRecipe: Recipe = new Recipe('','','',[]);
    let ingredientFormArray: FormArray = new FormArray([]);
  
    if ( this.editMode ){
      editRecipe = this.recipeService.getRecipebyId(this.recipeId);

      editRecipe.ingredients.forEach(ingredient => {
        ingredientFormArray.push(new FormGroup({
          'ingredientName': new FormControl(ingredient.name),
          'ingredientAmount': new FormControl(ingredient.amount)
        }))
      });
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(editRecipe.name, Validators.required),
      'imagePath' : new FormControl(editRecipe.imagePath),
      'description' : new FormControl(editRecipe.description, Validators.required),
      'ingredients': ingredientFormArray
    });
  }

}
