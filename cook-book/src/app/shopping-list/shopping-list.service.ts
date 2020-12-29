import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    let currentIngredient = this.ingredients.filter(
      (i) => i.name === ingredient.name
    )[0];

    if (typeof currentIngredient !== 'undefined') {
      currentIngredient.amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged.emit(this.ingredients);
  }
}
