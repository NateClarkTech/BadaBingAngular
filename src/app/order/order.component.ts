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
  selectedToppings: string[] = [];
  orderNumber = 0;


  /**
 * Adds the given menu item to the array orderContents
 *
 * @param {MenuItem} item - The MenuItem to add to the array
 * @returns {void}
 */
  addToOrder(item: MenuItem): void{
    //update the order price
    this.orderTotal += item.itemPrice
    //add menu item to the array
    this.orderContents.push(item)
    //sort the order
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

  addToOrderNameAndPrice(productName: string, productPrice: number) : void {
    let menuItem: MenuItem = {
      itemName: productName,
      itemPrice: productPrice,
    }

    this.addToOrder(menuItem);

  }

  addToOrderPizza()  {
    let orderString : string = this.selectedPizza;
    let price: number;

    for (let topping of this.selectedToppings){
      orderString = orderString + ", " + topping;
    }

    switch(this.selectedPizza) {
      case "One Slice": 
        price = 2.25;
        price = price + this.selectedToppings.length * 0.50;
        break;

      case 'Medium (16")': 
        price = 11.99;
        price = price + this.selectedToppings.length * 1.75;
        break;
      
      case 'Large (18")': 
        price = 13.99;
        price = price + this.selectedToppings.length * 1.75;
        break;
      
      case 'Sicilian (Square)': 
        price = 15.99; 
        price = price + this.selectedToppings.length * 1.75;
        break;

      case 'Sheet Pizza (24 Slices)': 
        price = 22.99;
        price = price + this.selectedToppings.length * 2.00;
        break;

      default:
        console.log("ERROR IN ORDER PIZZA: INVALID PIZZA TYPE GIVEN")
        return;
    }
    this.addToOrderNameAndPrice(orderString, price);
    this.selectedToppings = [];
    this.selectedPizza = '';
  }

  onChange(topping: string): void{
    if (this.selectedToppings.includes(topping)) {
      this.selectedToppings = this.selectedToppings.filter((item) => item !== topping);
    } else {
      this.selectedToppings.push(topping);
    }
    //send toppings array to parent
    console.log(this.selectedToppings);
  }

  clearCheckboxInput(formID: string){
    let formToEmpty = document.getElementsByName(formID)! as NodeListOf<HTMLInputElement>; //used chatGPT to get this line of code, I tried using what I used in ISP1 but it didn't work

    for (var i = 0; i < formToEmpty.length; i++){
      if (formToEmpty[i].checked){
        formToEmpty[i].checked = false;
      }

    } 
  }
  
  updateSelectedPizza(selectedPizza : string) : void {
    this.selectedPizza = selectedPizza;
    console.log("Selected Pizza: " + this.selectedPizza)
  }

  /**
 * Removes the element at the given index in the orderContents array
 *
 * @param {number} index - The index to remove
 * @returns {void}
 */
  removeFromOrder(index: number): void {
    //make sure order has contents and index is a value slot in the array
    if (this.orderContents.length !== 0 && this.orderContents.length > index){
      let removedItem: MenuItem[] = this.orderContents.splice(index, 1);
      this.orderTotal -= removedItem[0].itemPrice;
    }
  }


  completeOrder() : void {

    this.orderContents = []
    this.orderTotal = 0;

    this.orderNumber = Math.floor(Math.random())

  }
}
