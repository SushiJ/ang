import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @ts-ignore
  recipes: Recipe[];
  // @ts-ignore
  subs: Subscription;

  constructor(private rlService: RecipeService) {}

  ngOnInit(): void {
    this.subs = this.rlService.recipesChanged.subscribe((recipes) => {
      this.recipes = recipes;
    });
    this.recipes = this.rlService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
