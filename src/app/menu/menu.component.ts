import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MENU } from './menuContents';
import { MenuSection } from './menuSection';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{

  menu: MenuSection[] = MENU;
}
