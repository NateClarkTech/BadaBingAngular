import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MENU } from '../menu/menuContents';
import { MenuSection } from '../menu/menuSection';
import { MenuItem } from '../menu/menuItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  timeTillOrderComplete: number = Date.now();
  tip : number = 0;
  tipGiven : boolean = false;


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

  /**
   * Allows custom menu items to be added to the order based on a given string (name) and number (price).
   *
   * @param {string} productName - name of a menu item
   * @param {number} productPrice - the price of the menu item
   * @returns {void}
   */
  private addToOrderNameAndPrice(productName: string, productPrice: number) : void {
    let menuItem: MenuItem = {
      itemName: productName,
      itemPrice: productPrice,
    }

    this.addToOrder(menuItem);

  }

  /**
   * adds a pizza to the order, calulates price based on size and selectedToppings
   *
   * @returns {void}
   */
  addToOrderPizza() : void {
    let orderString : string = this.selectedPizza;
    let price: number;

    for (let topping of this.selectedToppings){
      orderString = orderString + ", " + topping;
    }

    //check currently selected pizza and add it to the order with the right price and toppings.
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
        //Fallback case: if this occurs then there is a bug in the program or data tampering.
        console.log("ERROR IN ORDER PIZZA: INVALID PIZZA TYPE GIVEN")
        return;
    }
    this.addToOrderNameAndPrice(orderString, price);
    this.selectedToppings = [];
    this.selectedPizza = '';
  }

    /**
   * When a topping checkbox is checked or unchecked it adds/removes the topping from the selected toppings.
   *
   * @param {string} topping - the name of the topping added to the pizza
   * @returns {void}
   */
  onChange(topping: string): void{
    //if the selected topping is in the selectedToppings array then it must be the case that the topping was unselected
    if (this.selectedToppings.includes(topping)) {
      this.selectedToppings = this.selectedToppings.filter((item) => item !== topping);
    } 
    
    //else the topping was selected to be on the pizza so add it to selectedToppings
    else { 
      this.selectedToppings.push(topping);
    }
    console.log(this.selectedToppings);
  }

  /**
 * Resets a checkbox form to all be unchecked
 *
 * @param {string} formID - the checkbox form to reset
 * @returns {void}
 */
  clearCheckboxInput(formID: string) : void {
    let formToEmpty = document.getElementsByName(formID)! as NodeListOf<HTMLInputElement>; //used chatGPT to get this line of code, I tried using what I used in ISP1 but it didn't work

    for (var i = 0; i < formToEmpty.length; i++){
      if (formToEmpty[i].checked){
        formToEmpty[i].checked = false;
      }

    } 
  }
  
  /**
 * Adds a tip of the given amount to the order.
 *
 * Note: I am sure there is a better way to design this aspect of the page
 *       when it comes to ordering pizzas.
 * @param {string} selectedPizza - The currently selected pizza
 * @returns {void}
 */
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

  /**
 * Adds a tip of the given amount to the order.
 *
 * @param {number} tip - The tip added to order
 * @returns {void}
 */
  addTip(tip: number) : void {    
    this.orderTotal = this.orderTotal + tip;
    this.tipGiven = true;
  }

  /**
   * Completes the order and calculates when the order will be complete (15 min after current user time)
   * 
   * @returns {void}
   */
  completeOrder() : void {
    this.timeTillOrderComplete = Date.now() + 900000; //get current time and add 15 minutes (900000 milliseconds = 15 min)
    this.orderNumber = Math.floor(Math.random() * 1000);
  }

  /**
 * Resets the order by reseting the order array and price.
 * 
 * @returns {void}
 */
  clearOrder() : void {
    this.orderContents = [];
    this.orderTotal = 0;
    this.tipGiven = false;
  }
}
