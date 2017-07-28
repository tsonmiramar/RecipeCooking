import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId:number;
  editMode: boolean = false;

  recipeEditForm: FormGroup;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.recipeId = +params['id'];
      this.editMode = params['id'] != null;
    });

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath' : new FormControl(null),
      'description' : new FormControl(null, Validators.required)
    });
  }

}
