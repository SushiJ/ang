import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  // @ts-ignore
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  @Output() ingredientAdd = new EventEmitter<{ name: string, amount: number }>();

  onAddItem() {
    const newIng = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.ingredientAdd.emit(newIng);
  }
}
