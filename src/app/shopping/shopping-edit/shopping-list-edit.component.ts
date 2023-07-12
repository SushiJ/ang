import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shoppingList.service';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @ViewChild('f', { static: true }) formRef: NgForm;

  private editingSub: Subscription | null;
  private selectedElem: Ingredient | null;
  // @ts-ignore
  private idx: number;
  isEditing = false;

  constructor(private slService: ShoppingListService) {
    this.editingSub = null;
    this.selectedElem = null;
  }

  ngOnInit(): void {
    this.editingSub = this.slService.onEdited.subscribe((idx: number) => {
      this.idx = idx;
      this.isEditing = true;
      this.selectedElem = this.slService.getIngredientByIdx(idx);
      this.formRef.setValue({
        name: this.selectedElem.name,
        amount: this.selectedElem.amount
      })
    });
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const newIng = new Ingredient(values.name, values.amount)
    this.slService.onIngAdded(newIng);
    form.reset()
  }

  onEdit(form: NgForm) {
    const values = form.value;
    const newIng = new Ingredient(values.name, values.amount)
    this.slService.editIng(newIng, this.idx);
    this.isEditing = false;
    form.reset()
  }

  onDelete(form: NgForm) {
    this.slService.deleteIng(this.idx);
    this.onClear(form);
  }
  onClear(form: NgForm) {
    form.reset();
  }

  ngOnDestroy(): void {
    this.editingSub!.unsubscribe();
  }

}
