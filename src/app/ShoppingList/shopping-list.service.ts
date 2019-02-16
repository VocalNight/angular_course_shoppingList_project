import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  // Subject para pegar index do item
  startedEditing = new Subject<number>();

 private ingredients: Ingredient[] = [
    new Ingredient('Corpse', 1),
    new Ingredient('Radiation', 1)
  ];

 getIngredients() {
   return this.ingredients.slice();
 }

 getIngredient(index: number) {
   return this.ingredients[index];
 }

 deleteIngredient(index: number) {
   // Remove só o elemento
   this.ingredients.splice(index, 1);
   this.ingredientsChanged.next(this.ingredients.slice());
 }

 updateIngredient(index: number, newIngredient: Ingredient) {
   this.ingredients[index] = newIngredient;
   this.ingredientsChanged.next(this.ingredients.slice());
 }

 addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.next(this.ingredients.slice());
 }

 addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.next(this.ingredients.slice());
 }

}
