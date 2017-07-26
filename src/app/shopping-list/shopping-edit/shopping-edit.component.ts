import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  ingredientEditForm : FormGroup;
  editMode: boolean = false;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    //Reactively initialize the edit form
    this.ingredientEditForm = new FormGroup({
      'name' : new FormControl(null,Validators.required),
      'amount': new FormControl(null, [Validators.required,this.positiveAmountValidator.bind(this)])
    });
  
    this.shoppingListService.editedIngredient.subscribe((data:{index:number,ingredient: Ingredient})=>{
      this.editMode = true;
      this.ingredientEditForm.get('name').setValue(data.ingredient.name);
      this.ingredientEditForm.get('amount').setValue(data.ingredient.amount);
    });

  }

  ngOnDestroy(){
    this.shoppingListService.editedIngredient.unsubscribe();
  }
  
  onSubmitForm(){
    
  }
  addIngredient(){
    this.shoppingListService.addAndEmitIngredients(new Ingredient(this.ingredientEditForm.get("name").value, this.ingredientEditForm.get('amount').value));
    this.ingredientEditForm.reset();
  }

  updateIngredient(index: number){
    this.shoppingListService.updateAndEmitIngredients(index, new Ingredient(this.ingredientEditForm.get("name").value, this.ingredientEditForm.get('amount').value));
  }

  onClearInput(){
    this.editMode = false;
    this.ingredientEditForm.reset();
  }

  positiveAmountValidator(control: FormControl): {[error: string] : any}{
    if ( control.value <= 0){
      return { 'negativeAmount': true};
    }
    return null;
  }

  
}
