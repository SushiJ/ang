import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './shopping/shopping-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListService } from './services/shoppingList.service';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
  ],
  providers: [
    ShoppingListService
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRouterModule
  ]
})
export class AppModule { }
