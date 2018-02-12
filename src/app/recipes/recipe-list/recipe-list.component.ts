import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Classic italian dough', 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1e0.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
