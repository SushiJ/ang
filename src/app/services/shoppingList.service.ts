import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = []

  getIngedrients() {
    return this.ingredients.slice()
  }
  onIngAdded(ing: Ingredient) {
    this.ingredients.push(ing)
    this.ingChanged.emit(this.ingredients.slice());
  }
  addIngs(ings: Ingredient[]) {
    ings.forEach((ing) => {
      this.ingredients.push(ing);
    })
    this.ingChanged.emit(this.ingredients.slice());
  }
}
