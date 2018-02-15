import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Pizza', 'Classic italian dough', 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1e0.png',
            [new Ingredient('Flour', 3), new Ingredient('Egg', 7)]),
        new Recipe('Burger', 'American cheese burger', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png',
            [new Ingredient('Meat', 4), new Ingredient('Cheese', 1)])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
