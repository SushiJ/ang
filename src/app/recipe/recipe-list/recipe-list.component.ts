import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription, tap } from 'rxjs';

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

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.subs = this.recipeService.recipesChanged
      .pipe(tap((x) => console.log(x)))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
