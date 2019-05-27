import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is a test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('Vegetable', 4)
        ]),
        new Recipe('Another test recipe', 'This is another test', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',[
            new Ingredient('Meat', 1),
            new Ingredient('Vegetable', 5),
            new Ingredient('Buns', 2)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();//get a copy of thte recipe array
    }

}