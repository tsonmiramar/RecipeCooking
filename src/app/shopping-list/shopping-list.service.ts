import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService{
    private ingredients: Ingredient[] = [];
    ingredientChanged = new Subject<Ingredient[]>();
    editedIngredient = new Subject<{index:number, ingredient: Ingredient}>();
    
    getIngredients(){
        return this.ingredients.slice();
    }

    pushIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    updateAndEmitIngredients(index:number, updatedIngredient: Ingredient){
        this.ingredients[index] = updatedIngredient;
        this.ingredientChanged.next(this.getIngredients());
    }

    addAndEmitIngredients(ingredient: Ingredient){
        this.pushIngredient(ingredient);
        this.ingredientChanged.next(this.getIngredients());
    }
}