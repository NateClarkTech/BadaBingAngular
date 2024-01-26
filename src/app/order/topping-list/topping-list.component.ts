import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSection } from '../../menu/menuSection';
import { MENU } from '../../menu/menuContents';

@Component({
  selector: 'app-topping-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topping-list.component.html',
  styleUrl: './topping-list.component.css'
})
export class ToppingListComponent {
  menu = MENU;
}
