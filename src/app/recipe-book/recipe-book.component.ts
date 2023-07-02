import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
  // @ts-ignore
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }
}
