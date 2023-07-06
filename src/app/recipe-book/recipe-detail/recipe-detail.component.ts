import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  // @ts-ignore
  @Input() recipe: Recipe;

  constructor(private rlService: RecipeService) { }

  onAddToList() {
    this.rlService.addIngToShoppingList(this.recipe.ingredients)
  }
}
