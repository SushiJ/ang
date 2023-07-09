import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = []

  getIngedrients() {
    return this.ingredients.slice()
  }
  onIngAdded(ing: Ingredient) {
    this.ingredients.push(ing)
    this.ingChanged.next(this.ingredients.slice());
  }
  addIngs(ings: Ingredient[]) {
    ings.forEach((ing) => {
      this.ingredients.push(ing);
    })
    this.ingChanged.next(this.ingredients.slice());
  }
}
