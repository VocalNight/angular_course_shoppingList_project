import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RecipeService} from '../RecipeBook/recipe.service';
import {Recipe} from '../RecipeBook/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-a3799.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-a3799.firebaseio.com/').pipe(
      map(
      (response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
