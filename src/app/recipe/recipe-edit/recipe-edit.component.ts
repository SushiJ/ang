import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  // @ts-ignore
  id: number;
  editMode: boolean;

  public recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private rSl: RecipeService,
    private router: Router
  ) {
    this.editMode = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  get recipeControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let ingArr = new FormArray<FormGroup>([]);

    if (this.editMode) {
      const selectedRecipe = this.rSl.getRecipeByIdx(this.id);
      recipeName = selectedRecipe.name;
      imagePath = selectedRecipe.imagePath;
      description = selectedRecipe.description;
      if (selectedRecipe['ingredients']) {
        for (let ing of selectedRecipe['ingredients']) {
          ingArr.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: ingArr,
    });
  }
  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // )
    if (this.editMode) {
      this.rSl.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.rSl.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/)),
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIng(idx: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(idx);
  }
}
