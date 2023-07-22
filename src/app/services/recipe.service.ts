import { Injectable } from "@angular/core";
import { Recipe } from "../recipe-book/recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "./shoppingList.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe("Garlic chili oil noodles", "These easy garlic chili oil noodles are not for those with a mild palate! Wok-fried garlic chili oil takes ramen noodles to a new level.", "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg?quality=90&resize=556,505", [
      new Ingredient("ramen noodles", 1),
      new Ingredient("sesame oil", 2),
      new Ingredient("soy sauce", 2),
      new Ingredient("chiu chow style chili oil", 1),
      new Ingredient("cloves garlic, minced", 4),
      new Ingredient("pinch black sesame seeds", 1)
    ]),
    new Recipe("Fruit Tart", "These 4-ingredient fruit tarts are quick and easy to make. You can use most fruit, e.g. pears, apples, peaches, or nectarines. Serve warm with vanilla ice cream or sugar glaze if desired.", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F3f5ab65811a5296c33546022df31c59f%2F1683939726398Easy-4-Ingredient-Fruit-Tarts.jpg&q=60&c=sc&orient=true&poi=auto&h=512", [
      new Ingredient("Pears", 2),
      new Ingredient("Egg", 1),
      new Ingredient("Puff Pastry", 1),
      new Ingredient("Cup Honey", 3 / 4),
    ])
  ]

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeByIdx(idx: number) {
    return this.recipes[idx];
  }

  addIngToShoppingList(ings: Ingredient[]) {
    this.slService.addIngs(ings);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(idx: number, recipe: Recipe) {
    this.recipes[idx] = recipe
    this.recipesChanged.next(this.recipes.slice())
  }

  onDelete(idx: number) {
    this.recipes.splice(idx, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
