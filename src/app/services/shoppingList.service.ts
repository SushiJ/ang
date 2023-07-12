import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingChanged = new Subject<Ingredient[]>();
  onEdited = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Test", 1),
    new Ingredient("Test2", 1),
    new Ingredient("Test3", 1),
  ]

  getIngredientByIdx(idx: number): Ingredient {
    return this.ingredients[idx];
  }
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
  editIng(ing: Ingredient, idx: number): void {
    this.ingredients[idx] = ing;
    this.ingChanged.next(this.ingredients.slice());
  }

  deleteIng(idx: number) {
    this.ingredients.splice(idx, 1);
    this.ingChanged.next(this.ingredients.slice());
  }
}
