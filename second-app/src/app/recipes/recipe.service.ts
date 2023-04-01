import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe("Mixed veggies stir fry", "healthy, tasty veggies", "https://cdn.pixabay.com/photo/2017/04/08/14/37/kitchen-2213422_960_720.jpg", [
            new Ingredient("Beans", 1),
            new Ingredient("Carrots", 123)
        ]),
        new Recipe("Pizza", "less healthy, but tasty", "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg", [
            new Ingredient("Flour", 1),
            new Ingredient("Tomato Paste", 1)
        ]),
        new Recipe("Fried rice", "filling and tasty", "https://cdn.pixabay.com/photo/2017/12/16/17/46/fried-rice-3023040_960_720.jpg", [
            new Ingredient("Rice", 1),
            new Ingredient("Oil", 1)
        ]),
    ]

    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}