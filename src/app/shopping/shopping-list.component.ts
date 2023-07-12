import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shoppingList.service';
import { Ingredient } from '../shared/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = []
  // @ts-ignore
  private serviceSub: Subscription;

  constructor(private slService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.ingredients = this.slService.getIngedrients()

    this.serviceSub = this.slService.ingChanged.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings
      }
    )
  }

  onItemEdit(idx: number) {
    this.slService.onEdited.next(idx);
  }

  ngOnDestroy(): void {
    this.serviceSub.unsubscribe()
  }
}
