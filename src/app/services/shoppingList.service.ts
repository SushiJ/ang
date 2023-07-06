import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Test", 1),
    new Ingredient("Test2", 2),
  ]

  getIngedrients() {
    return this.ingredients.slice()
  }
  onIngAdded(ing: Ingredient) {
    this.ingredients.push(ing)
    this.ingChanged.emit(this.ingredients.slice());
  }
}
