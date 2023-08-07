import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipe/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private client: HttpClient,
    private recipeService: RecipeService
  ) {}

  postRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.client.put('api', recipes).subscribe((resp) => console.log(resp));
  }

  fetchRecipes() {
    this.client.get<Recipe[]>('API').subscribe((recipes) => {
      console.log(recipes);
      this.recipeService.setFetchedRecipes(recipes);
    });
  }
}
