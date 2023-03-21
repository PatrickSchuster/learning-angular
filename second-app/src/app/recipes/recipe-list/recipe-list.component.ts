import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Mixed veggies stir fry", "healthy, tasty veggies", "https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg"),
    new Recipe("Pizza", "less healthy, but tasty", "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"),
    new Recipe("Fried rice", "filling and tasty", "https://cdn.pixabay.com/photo/2017/12/16/17/46/fried-rice-3023040_960_720.jpg"),
  ]
   
}
