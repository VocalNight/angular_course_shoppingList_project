import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../ShoppingList/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('Junko', 'Zombie', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGRnLJuI1upmIx513LH7409mQkWqDQfAfN2gufV0lrDM-2GT5', [
      new Ingredient('Brain', 1),
      new Ingredient('body', 1)
    ]),
    new Recipe('Sakura', 'Zombie', 'https://myanimelist.cdn-dena.com/images/characters/13/364579.jpg', [
      new Ingredient('Brain', 1),
      new Ingredient('body', 1)
    ])
  ];

  constructor(private shoppingService: ShoppingListService) {
}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
