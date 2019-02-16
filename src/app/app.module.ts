import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './ShoppingList/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './RecipeBook/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './RecipeBook/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './RecipeBook/recipe-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './RecipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './RecipeBook/recipe-edit/recipe-edit.component';
import {ShoppingListService} from './ShoppingList/shopping-list.service';
import {RecipeService} from './RecipeBook/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
