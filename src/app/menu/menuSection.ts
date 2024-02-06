import { MenuItem } from "./menuItem";

//data struct for a menu section
export interface MenuSection{
    sectionName: string;
    sectionItems: MenuItem[];
    sectionDescription?: string;
    extraOptions?: string[]; //Work around for getting a list of toppings, should be redesigned.
}

