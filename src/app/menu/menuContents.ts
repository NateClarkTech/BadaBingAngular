import { MenuSection } from "./menuSection";

export const MENU: MenuSection[] = [
    {
        sectionName: 'Chicken',
        sectionItems: [
            {
                itemName: 'Chicken Parmesan',
                itemPrice: 15.99,
                itemDescription: 'Fresh chicken cutlet baked with house sauce and mozzarella cheese. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Chicken Francese',
                itemPrice: 16.99,
                itemDescription: 'Lightly egg-battered chicken topped with a lemon white wine sauce. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Chicken Marsala',
                itemPrice: 16.99,
                itemDescription: 'Tender chicken breast sautéed in Marsala wine and fresh mushrooms. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Chicken Cattiatore',
                itemPrice: 16.99,
                itemDescription: 'Chicken, onions, and green peppers simmered in spicy tomato sauce. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Chicken Scarpriello',
                itemPrice: 16.99,
                itemDescription: 'Sautéed chicken, sausage, onions, sweet and hot peppers. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Chicken Picata',
                itemPrice: 16.99,
                itemDescription: 'Chicken breast sautéed in a lemon butter sauce with capers. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Veal Chop',
                itemPrice: 25.99,
                itemDescription: 'Substitute veal for any chicken dish ($6.00 Extra)',
            },
        ],
    },
    {
        sectionName: 'Seafood',
        sectionItems: [
            {
                itemName: 'Capellini Delight',
                itemPrice: 17.99,
                itemDescription: 'Capellini topped with snow peas, fresh shrimp, and scallops in a garlic delicate pink sauce. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Linguini with Clam Sauce',
                itemPrice: 15.99,
                itemDescription: 'Fresh clams with your choice of red or white sauce. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Shrimp Scampi',
                itemPrice: 16.99,
                itemDescription: 'Shrimp lightly sautéed in a garlic, white wine, and butter sauce over your choice of pasta. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Mussels Fra Diavlo',
                itemPrice: 15.99,
                itemDescription: 'Fresh mussels served in a garlic, white wine, and butter sauce or light garlic, white wine, and butter scampi over your choice of pasta. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Broiled Swai',
                itemPrice: 16.99,
                itemDescription: 'A light white fish fillet broiled tender with a butter-garlic sauce, served with either pasta or vegetable. With your choice of pasta & garden salad or fresh soup.',
            },
            {
                itemName: 'Zuppa de Pesce',
                itemPrice: 19.99,
                itemDescription: 'Shrimp, scallops, clams, and mussels in a spicy marinara sauce over your choice of pasta. With your choice of pasta & garden salad or fresh soup.',
            },
        ],
    },
    {
        sectionName: '12" Subs',
        sectionItems: [
            {
                itemName: 'Eggplant Parmesan',
                itemPrice: 10.99,
            },
            {
                itemName: 'Chicken Parmesan',
                itemPrice: 10.99,
            },
            {
                itemName: 'Steak & Cheese',
                itemPrice: 10.99,
            },
            {
                itemName: 'Caprese',
                itemPrice: 10.99,
            },
            {
                itemName: 'Meatball Parmesan',
                itemPrice: 10.99,
            },
            {
                itemName: 'Italian Combo',
                itemPrice: 10.99,
            },
            {
                itemName: 'Ham or Salami with Cheese',
                itemPrice: 10.99,
            },
            {
                itemName: 'Sausage, Peppers & Onions',
                itemPrice: 10.99,
            },
            {
                itemName: 'Veal Parmesan Sub',
                itemPrice: 11.99,
            },
        ],
        sectionDescription: 'Made on Sal\'s Homemade Italian Bread. Add Sauce & Mozzarella Cheese $1.00 Extra'
    },
    {
    sectionName: 'Chicken Wings',
    sectionItems: [
        {
            itemName: '10 Wings',
            itemPrice: 9.99,
        },
        {
            itemName: '20 Wings',
            itemPrice: 17.99,
        },
        {
            itemName: '30 Wings',
            itemPrice: 25.99,
        },
        {
            itemName: '40 Wings',
            itemPrice: 31.99,
        }
    ],
    sectionDescription: 'Fried until a crispy golden brown. Sauces: Hot, Mild, Garlic, Honey BBQ, Teriyaki'
    },
    {
        sectionName: 'Pizza',
        sectionItems: [
            {
                itemName: 'One Slice',
                itemPrice: 2.25,
            },
            {
                itemName: 'Medium (16")',
                itemPrice: 11.99,
            },
            {
                itemName: 'Large (18")',
                itemPrice: 13.99,
            },
            {
                itemName: 'Sicilian (Square)',
                itemPrice: 15.99,
            },
            {
                itemName: 'Sheet Pizza (24 Slices)',
                itemPrice: 22.99,
            },
        ],
        sectionDescription: "Toppings: Extra Cheese, Meatballs, Tomatoes, Sausage, Hot Cherry Peppers, Mushrooms," +
                            " Artichokes, Onions, Black Olives, Green Peppers, Ricotta Cheese, Salami, Ham, Pepperoni,"+ 
                            " Chicken, Bacon, Peppercini, Pineapple, Anchovies, Spinach, Roasted Red Peppers.  " +
                            "\nPrice per topping: Sheet - $2.00, Whole pizza - $1.75, Slice - $0.50",
        extraOptions: ["Extra Cheese", "Meatballs", "Tomatoes", "Sausage", "Hot Cherry Peppers", "Mushrooms", "Artichokes",
                        "Onions", "Black Olives", "Green Peppers", "Richotta Cheese", "Salami", "Ham", "Pepperoni", "Chicken",
                        "Bacon", "Peppercini", "Pineapple", "Anchovies", "Spinach", "Roasted Red Peppers"]
    },
    {
        sectionName: 'Specialty Pizza',
        sectionItems: [
            {
                itemName: 'Medium White Pizza',
                itemPrice: 13.99, // Medium
            },
            {
                itemName: 'Large White Pizza',
                itemPrice: 15.99, // Medium
                itemDescription: 'Oil, garlic, parmesan, and ricotta cheeses with fresh basil. Large - $15.99',
            },
            {
                itemName: 'Medium Margherita Pizza',
                itemPrice: 14.99, // Medium
            },
            {
                itemName: 'Medium Margherita Pizza',
                itemPrice: 14.99, // Medium
                itemDescription: 'Traditional pizza topped with fresh mozzarella cheese and basil. Medium - $14.99 Large - $16.99',
            },
        ],
    },
    {
        sectionName: 'Pizza Combos',
        sectionItems: [
            {
                itemName: 'Party Pack Special',
                itemPrice: 24.99,
                itemDescription: 'Large Pizza, Dozen Wings, 2 Liter of Soda',
            },
            {
                itemName: 'Family Pack Special',
                itemPrice: 48.99,
                itemDescription: '2 Large Pizzas, 2 Dozen Wings, 2-2 Liters of Soda',
            },
            {
                itemName: 'Bada Bing Pack Special',
                itemPrice: 52.99,
                itemDescription: 'Sheet Pizza, 3 Dozen Wings, Dozen Garlic Knots, 2-2 Liters of Soda',
            },
        ],
    },
    {
        sectionName: 'Pizza Breads',
        sectionItems: [
            {
            itemName: 'Stromboli',
            itemPrice: 12.99,
            itemDescription: 'Sausage, pepperoni, onions, green peppers & mozzarella cheese wrapped in pizza dough and baked golden. Each additional topping add $1.00',
            },
            {
                itemName: 'Calzone',
                itemPrice: 12.99,
                itemDescription: 'Ricotta, mozzarella, and freshly grated parmesan cheeses, stuffed in pizza dough and then cooked to perfection. Each additional topping add $0.75',
            }
            ],
        sectionDescription: 'Like A Pizza Pastry'
    },
    {
        sectionName: 'House Wines & Beer',
        sectionItems: [
            {
                itemName: 'Montepulciano D\'Abruzzo (Red)',
                itemPrice: 6.00,
                itemDescription: '$6 Glass',
            },
            {
                itemName: 'Pinot Grigio (White)',
                itemPrice: 6.00,
                itemDescription: '$6 Glass',
            },
            {
                itemName: 'White Zinfandel (Blush)',
                itemPrice: 5.00,
                itemDescription: '$5.00 Glass',
            },
            {
                itemName: 'Moscato D\'Asti (Dessert)',
                itemPrice: 6.00,
                itemDescription: '$6.00 Glass',
            },
            {
                itemName: 'Domestic Beer',
                itemPrice: 3.50,
                itemDescription: '$3.50',
            },
            {
                itemName: 'Imported Beer',
                itemPrice: 4.00,
                itemDescription: '$4.00',
            },
        ],
    },
    {
        sectionName: 'Appetizers',
        sectionItems: [
            {
                itemName: 'Garlic Knots, 6',
                itemPrice: 3.00,
                itemDescription: 'Our knotted dough dipped in our homemade garlic butter.',
            },
            {
                itemName: 'Garlic Knots, 12',
                itemPrice: 4.99,
                itemDescription: 'Our knotted dough dipped in our homemade garlic butter.',
            },
            {
                itemName: 'Rice Ball',
                itemPrice: 4.99,
                itemDescription: 'Rice stuffed with ground beef, peas and house sauce lightly breaded and fried golden.',
            },
            {
                itemName: 'Rice Ball Parmagiano',
                itemPrice: 6.99,
                itemDescription: 'Our rice ball topped with house sauce and mozzarella cheese and baked to golden.',
            },
            {
                itemName: 'Broccoli Rabe',
                itemPrice: 9.99,
                itemDescription: 'Steamed in garlic and olive oil.',
            },
            {
                itemName: 'Grilled Pizza',
                itemPrice: 10.99,
                itemDescription: 'Grilled on an open fire with tomato, mozzarella, and parmigiana cheese.',
            },
            {
                itemName: 'Mussels Fra Diavlo',
                itemPrice: 12.99,
                itemDescription: 'Fresh mussels in your choice of spicy marinara sauce or a wine and butter sauce.',
            },
            {
                itemName: 'Shrimp Scampi',
                itemPrice: 11.99,
                itemDescription: 'Shrimp sautéed in a light garlic butter and white wine sauce.',
            },
            {
                itemName: 'Fried Calamari - Single',
                itemPrice: 10.99,
                itemDescription: 'Perfectly fried calamari served with spicy marinara sauce.',
            },
            {
                itemName: 'Fried Calamari - Double',
                itemPrice: 18.00,
                itemDescription: 'Perfectly fried calamari served with spicy marinara sauce.',
            },
        ],
    },
    {
        sectionName: 'Soup',
        sectionItems: [
            {
                itemName: 'Pasta Fagioli - Cup',
                itemPrice: 2.50,
                itemDescription: 'Your choice of our homemade Pasta Fagioli.',
            },
            {
                itemName: 'Pasta Fagioli - Bowl',
                itemPrice: 5.00,
                itemDescription: 'Your choice of our homemade Pasta Fagioli.',
            },
            {
                itemName: 'Soup of the Day - Cup',
                itemPrice: 2.50,
                itemDescription: 'Your choice of freshly made soup of the day.',
            },
            {
                itemName: 'Soup of the Day - Bowl',
                itemPrice: 5.00,
                itemDescription: 'Your choice of freshly made soup of the day.',
            },
            {
                itemName: 'Soup of the Day - Pint',
                itemPrice: 6.00,
                itemDescription: 'Your choice of freshly made soup of the day.',
            },
            {
                itemName: 'Soup of the Day - Quart',
                itemPrice: 10.00,
                itemDescription: 'Your choice of freshly made soup of the day.',
            },
        ],
    },
    {
        sectionName: 'Salads',
        sectionItems: [
            {
                itemName: 'Garden Salad',
                itemPrice: 5.99,
                itemDescription: 'Mixed lettuce tossed with tomato, cucumber, black olives, and onion.',
            },
            {
                itemName: 'Caesar Salad',
                itemPrice: 5.99,
                itemDescription: 'Crisp romaine tossed in creamy Caesar dressing topped with fresh parmesan cheese and croutons.',
            },
            {
                itemName: 'Caesar Salad with Chicken',
                itemPrice: 10.99,
                itemDescription: 'Crisp romaine tossed in creamy Caesar dressing topped with fresh parmesan cheese and croutons, with chicken.',
            },
            {
                itemName: 'Caesar Salad with Shrimp',
                itemPrice: 13.99,
                itemDescription: 'Crisp romaine tossed in creamy Caesar dressing topped with fresh parmesan cheese and croutons, with shrimp.',
            },
            {
                itemName: 'Caprese Salad',
                itemPrice: 11.99,
                itemDescription: 'Fresh mozzarella, fresh tomato, and basil with olive oil and balsamic vinegar.',
            },
            {
                itemName: 'Antipasto Salad - Small',
                itemPrice: 11.99,
                itemDescription: 'Our garden salad topped with artichoke hearts, roasted red peppers, Italian salami, ham, and provolone cheese.',
            },
            {
                itemName: 'Antipasto Salad - Large',
                itemPrice: 15.99,
                itemDescription: 'Our garden salad topped with artichoke hearts, roasted red peppers, Italian salami, ham, and provolone cheese.',
            },
        ],
    },
    {
        sectionName: 'Pasta',
        sectionItems: [
            {
                itemName: 'House Sauce',
                itemPrice: 11.99,
                itemDescription: 'Our family recipe fuggadaboutit.',
            },
            {
                itemName: 'Spaghetti & Meatballs',
                itemPrice: 15.99,
                itemDescription: 'Our house sauce with homemade meatballs.',
            },
            {
                itemName: 'Pasta Angelo',
                itemPrice: 13.99,
                itemDescription: 'Our fresh marinara sauce with chunk tomato, chopped garlic, and fresh basil over your choice of pasta.',
            },
            {
                itemName: 'Meat Sauce',
                itemPrice: 14.99,
                itemDescription: 'Our house sauce with fresh ground beef.',
            },
            {
                itemName: 'Garlic & Oil',
                itemPrice: 12.99,
                itemDescription: 'Garlic sautéed in extra virgin olive oil.',
            },
            {
                itemName: 'Broccoli Rabe',
                itemPrice: 16.99,
                itemDescription: 'Sauteed with sausage, garlic, and olive oil.',
            },
            {
                itemName: 'Broccoli Rabe with Prosciutto & Peas',
                itemPrice: 20.99,
                itemDescription: 'Sauteed with sausage, garlic, and olive oil.',
            },
            {
                itemName: 'Alfredo',
                itemPrice: 15.99,
                itemDescription: 'A parmesan cream sauce with sautéed spinach and chicken.',
            },
            {
                itemName: 'Ala Vodka',
                itemPrice: 15.99,
                itemDescription: 'A light pink cream sauce with peppered vodka.',
            },
            {
                itemName: 'Add prosciutto & peas',
                itemPrice: 4.00,
                itemDescription: '',
            },
            {
                itemName: 'Linguine Carbonara',
                itemPrice: 16.99,
                itemDescription: 'Imported Italian bacon, roasted garlic, peas, and onions in a creamy egg & Romano cheese sauce.',
            },
            {
                itemName: 'Penne della Nona',
                itemPrice: 16.99,
                itemDescription: 'Escarole sautéed with garlic, sausage, white beans, and a touch of tomato.',
            },
        ],
    },
    {
        sectionName: 'House Specialties',
        sectionItems: [
            {
                itemName: 'Lasagna',
                itemPrice: 15.99,
                itemDescription: 'Pasta sheets layered with ground beef, ricotta cheese, our house sauce & mozzarella, then baked until bubbly. Served with choice of garden salad or soup.',
            },
            {
                itemName: 'Baked Ziti',
                itemPrice: 15.99,
                itemDescription: 'Ziti tossed with house sauce, ricotta, and mozzarella cheeses then baked until golden. Served with choice of garden salad or soup.',
            },
            {
                itemName: 'Ravioli',
                itemPrice: 11.99,
                itemDescription: 'Stuffed with ricotta and parmesan cheese and then covered in house sauce. Served with choice of garden salad or soup.',
            },
            {
                itemName: 'Eggplant Parmesan',
                itemPrice: 14.99,
                itemDescription: 'Freshly breaded eggplant, house sauce and mozzarella cheese with a side of pasta. Served with choice of garden salad or soup.',
            },
        ],
    },
    {
        sectionName: 'Beverages',
        sectionItems: [
            {
                itemName: 'Pepsi',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Sierra Mist',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Mountain Dew',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Lemonade',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Orange Crush',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Diet Pepsi',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Mug Root Beer',
                itemPrice: 2.00,
                itemDescription: '',
            },
            {
                itemName: 'Fresh Brewed Unsweet Tea',
                itemPrice: 2.00,
                itemDescription: '',
            },
        ],
    },
    {
        sectionName: 'Desserts',
        sectionItems: [
            {
                itemName: 'Espresso - Single',
                itemPrice: 2.00,
            },
            {
                itemName: 'Espresso - Double',
                itemPrice: 4.00,
            },
            {
                itemName: 'Cappuccino',
                itemPrice: 4.00,
            },
            {
                itemName: 'Flavor shots (for coffee)',
                itemPrice: 0.50,
            },
            {
                itemName: 'Canoli',
                itemPrice: 0.50,
            },
            {
                itemName: 'Tiramisu',
                itemPrice: 4.00,
            },
            {
                itemName: 'Rumbaba',
                itemPrice: 3.50,
            },
            {
                itemName: 'Zappoli',
                itemPrice: 1.00,
            },
            {
                itemName: 'Boxed cookies',
                itemPrice: 8.99,
            },
        ],
    },
];
