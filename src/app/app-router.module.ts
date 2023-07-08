import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { RecipeBookComponent } from "./recipe-book/recipe-book.component"
import { ShoppingListComponent } from "./shopping/shopping-list.component"

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", component: RecipeBookComponent },
  { path: "shopping-list", component: ShoppingListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
