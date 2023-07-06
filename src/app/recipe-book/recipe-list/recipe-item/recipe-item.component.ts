import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent {
  // @ts-ignore
  @Input() recipe: Recipe;

  constructor(private rlService: RecipeService) { }

  onSelected(): void {
    this.rlService.recipeSelected.emit(this.recipe);
  }
}
