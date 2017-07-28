import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.recipeId = +params['id'];
      this.editMode = params['id'] != null;
      this.buildForm(); 
    });
  }

  onAddIngredient(){
    (<FormArray>this.recipeEditForm.get('ingredients')).push(new FormGroup({
      'ingredientName': new FormControl('',Validators.required),
      'ingredientAmount': new FormControl('', Validators.required)
    }))
  }

  onSubmit(){
    let updateRecipe: Recipe = new Recipe(this.recipeEditForm.get('name').value, this.recipeEditForm.get('description').value,this.recipeEditForm.get('imagePath').value,[]);
    (<FormArray>this.recipeEditForm.get('ingredients')).controls.forEach(ingredientCtrl => {
      updateRecipe.ingredients.push(new Ingredient(ingredientCtrl.get('ingredientName').value,ingredientCtrl.get('ingredientAmount').value));
    });

    if (this.editMode){
      this.recipeService.setRecipebyId(this.recipeId,updateRecipe);
    }
    else{
      this.recipeService.addNewRecipe(updateRecipe);
    }

    this.router.navigate(['/recipes']);
  }

  private buildForm(){
    let editRecipe: Recipe = new Recipe('','','',[]);
    let ingredientFormArray: FormArray = new FormArray([]);
  
    if ( this.editMode ){
      editRecipe = this.recipeService.getRecipebyId(this.recipeId);

      editRecipe.ingredients.forEach(ingredient => {
        ingredientFormArray.push(new FormGroup({
          'ingredientName': new FormControl(ingredient.name, Validators.required),
          'ingredientAmount': new FormControl(ingredient.amount, Validators.required)
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
