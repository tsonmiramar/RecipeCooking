import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService{
    private ingredients: Ingredient[] = [];
    addedIngredient = new Subject<Ingredient[]>();
    
    getIngredients(){
        return this.ingredients.slice();
    }

    pushIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    addAndEmitIngredients(ingredient: Ingredient){
        this.pushIngredient(ingredient);
        this.addedIngredient.next(this.getIngredients());
    }
}