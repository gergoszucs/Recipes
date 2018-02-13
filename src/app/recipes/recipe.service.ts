import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza', 'Classic italian dough', 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1e0.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
