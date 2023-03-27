import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("nameInput", { static: false })
  nameInput: ElementRef

  @ViewChild("amountInput", { static: false })
  amountInput: ElementRef

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>()

  onAddClicked() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.ingredientAdded.emit(ingredient)
  }
}
