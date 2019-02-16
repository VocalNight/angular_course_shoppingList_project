import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeBookComponent} from './RecipeBook/recipe-book.component';
import {ShoppingListComponent} from './ShoppingList/shopping-list.component';
import {RecipeDetailComponent} from './RecipeBook/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './RecipeBook/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './RecipeBook/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: 'recipes', component: RecipeBookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent},
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
