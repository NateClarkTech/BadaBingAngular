import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MENU } from '../menu/menuContents';
import { MenuSection } from '../menu/menuSection';
import { MenuItem } from '../menu/menuItem';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { ToppingListComponent } from './topping-list/topping-list.component';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ToppingListComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent{
  menu: MenuSection[] = MENU;
  orderTotal: number = 0;
  orderContents: MenuItem[] = []
  selectedPizza: string = ''; //A state of the selected pizza.

  addToOrder(item: MenuItem): void{
    this.orderTotal += item.itemPrice
    this.orderContents.push(item)
    this.orderContents.sort((s1, s2) => {
        if (s1.itemName > s2.itemName ){
          return 1;
        }
        
        if (s1.itemName < s2.itemName){
          return -1;
        }

      return 0;
    });
  } 

  addToOrderPizza(item: MenuItem, numToppings: number)  {
    switch(item.itemName) {
      
    }
  }

  removeFromOrder(index: number): void {
    if (this.orderContents.length !== 0){
      let removedItem: MenuItem[] = this.orderContents.splice(index, 1);
      this.orderTotal -= removedItem[0].itemPrice;
    }
  }

  changeSelectedPizza(selectedPizza: string): void {
    switch (selectedPizza){
      case "One Slice":
        this.selectedPizza = "One Slice";
        break;

      case 'Medium (16")':
        this.selectedPizza = 'Medium (16")';
        break;

      case 'Large (18")':
        this.selectedPizza = 'Large (18")';
        break;

      case "Sicilian (Square)":
        this.selectedPizza = "Sicilian (Square)";
        break;

      case "Sheet Pizza (24 Slices)":
        this.selectedPizza = "Sheet Pizza (24 Slices)";
        break;

      default: //fallback case, shouldn't occur unless someone adds a new type of pizza without updating this function.
               //This should be redesigned at some point to make it more maintainable and expandable.
        console.log("ERROR: INVALID PIZZA TYPE SELECTED - order page - changeSelectedPizza")
        this.selectedPizza = "";
      }
  } 

  clearCheckboxInput(){

  }
}
