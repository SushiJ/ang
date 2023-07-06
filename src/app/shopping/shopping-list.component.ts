import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shoppingList.service';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []
  constructor(private slService: ShoppingListService) {
  }
  ngOnInit(): void {
    this.ingredients = this.slService.getIngedrients()
    this.slService.ingChanged.subscribe(
      (ings: Ingredient[]) => {
        this.ingredients = ings
      }
    )
  }
}
