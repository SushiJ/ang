import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Test", 1),
    new Ingredient("Test2", 2),
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

  onIngAdded(ing: Ingredient) {
    this.ingredients.push(ing)
  }
}
