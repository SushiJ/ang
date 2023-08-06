import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @ts-ignore
  @Input() recipe: Recipe;
  // @ts-ignore
  id: number;

  constructor(private rlService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  onAddToList() {
    this.rlService.addIngToShoppingList(this.recipe.ingredients)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.rlService.getRecipeByIdx(this.id);
    })
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onDelete() {
    this.rlService.onDelete(this.id);
    this.router.navigate(['recipes'])
  }
}
