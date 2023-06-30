import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients("Test", 1),
    new Ingredients("Test2", 2)
  ];

  constructor() { }
  ngOnInit(): void {

  }
}
