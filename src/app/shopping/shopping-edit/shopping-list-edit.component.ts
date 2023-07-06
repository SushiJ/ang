import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppingList.service';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})

export class ShoppingListEditComponent {
  // @ts-ignore
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef<HTMLInputElement>;
  // @ts-ignore
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef<HTMLInputElement>;

  private name: string;
  private amount: number | null;

  constructor(private slService: ShoppingListService) {
    this.name = "";
    this.amount = null;
  }

  onAddItem() {
    this.name = this.nameInputRef.nativeElement.value;
    this.amount = parseInt(this.amountInputRef.nativeElement.value)
    const newIng = new Ingredient(this.name, this.amount)
    this.slService.onIngAdded(newIng);
  }

  onCleared() {
    this.nameInputRef.nativeElement.value = ""
    this.amountInputRef.nativeElement.value = ""
  }
}
