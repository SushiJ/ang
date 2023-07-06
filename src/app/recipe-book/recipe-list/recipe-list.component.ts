import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private rlService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.rlService.getRecipes();
  }
}
