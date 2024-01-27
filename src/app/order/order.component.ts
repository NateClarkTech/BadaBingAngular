import { Component, OnInit } from '@angular/core';
import { MENU } from '../menu/menuContents';
import { MenuSection } from '../menu/menuSection';
import { MenuItem } from '../menu/menuItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  addToOrderPizza(item: MenuItem, numToppings: number){
    switch(item.itemName) {
      
    }
  }

  removeFromOrder(index: number){
    if (this.orderContents.length !== 0){
      let removedItem: MenuItem[] = this.orderContents.splice(index, 1);
      this.orderTotal -= removedItem[0].itemPrice;
    }
  }
}
