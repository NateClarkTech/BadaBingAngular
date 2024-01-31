import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSection } from '../../menu/menuSection';
import { MENU } from '../../menu/menuContents';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from '../order.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topping-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './topping-list.component.html',
  styleUrl: './topping-list.component.css',
  providers: [OrderComponent]
})
export class ToppingListComponent {
  menu = MENU;
  selectedToppings: string[] = [];
  @Output() toppingsSelected = new EventEmitter<string[]>();

  /**
 * Updates the selectedToppings when a checkbox is selected.
 * 
 * Source: https://stackoverflow.com/questions/71522120/get-values-of-all-selected-checkboxes-using-angular
 *
 * @param {string} topping - The topping string to add to the list
 * @returns {void}
 */
  //https://stackoverflow.com/questions/71522120/get-values-of-all-selected-checkboxes-using-angular
  onChange(topping: string): void{
    if (this.selectedToppings.includes(topping)) {
      this.selectedToppings = this.selectedToppings.filter((item) => item !== topping);
    } else {
      this.selectedToppings.push(topping);
    }
    //send toppings array to parent
    this.toppingsSelected.emit(this.selectedToppings);
    console.log(this.selectedToppings);
  }
}
