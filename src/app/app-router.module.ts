import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { RecipeBookComponent } from "./recipe/recipe.component"
import { ShoppingListComponent } from "./shopping/shopping-list.component"
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component"
// import { RecipeNewComponent } from "./recipe/recipe-new/recipe-new.component"
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component"
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component"

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes", component: RecipeBookComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent },
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
