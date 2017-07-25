import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientEditForm : FormGroup;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    //Reactively initialize the edit form
    this.ingredientEditForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required,this.positiveAmountValidator.bind(this)])
    });
  }
  
  onAddIngredient(){
    this.shoppingListService.addAndEmitIngredients(new Ingredient(this.ingredientEditForm.get("name").value, this.ingredientEditForm.get('amount').value));
  }

  positiveAmountValidator(control: FormControl): {[error: string] : any}{
    if ( control.value <= 0){
      return { 'negativeAmount': true};
    }
    return null;
  }
}
