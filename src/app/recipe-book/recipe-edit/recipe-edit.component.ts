import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  private id: number | undefined;
  private editMode: boolean;
  private recipeName = "";
  private imagePath = "";
  private description = "";

  recipeForm = new FormGroup({
    'name': new FormControl(this.recipeName),
    'imagePath': new FormControl(this.imagePath),
    'description': new FormControl(this.description)
  });


  constructor(private route: ActivatedRoute, private rSl: RecipeService) {
    this.editMode = false;
    this.id = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    })
  }

  initForm() {
    if (this.editMode) {
      const selectedRecipe = this.rSl.getRecipe(this.id!);
      this.recipeName = selectedRecipe.name;
      this.imagePath = selectedRecipe.imagePath;
      this.description = selectedRecipe.description;
    }
  }
}
