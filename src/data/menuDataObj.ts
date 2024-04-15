import coffee1 from "/img/coffee1.jpg";
import coffee2 from "/img/coffee2.jpg";
import coffee3 from "/img/coffee3.jpg";
import coffee4 from "/img/coffee4.jpg";
import coffee5 from "/img/coffee5.jpg";
import coffee6 from "/img/coffee6.jpg";
import coffee7 from "/img/coffee7.jpg";
import coffee8 from "/img/coffee8.jpg";
import coffee9 from "/img/coffee9.png";
import coffee10 from "/img/coffee10.png";
import coffee11 from "/img/coffee11.png";
import tea1 from "/img/tea1.png";
import tea2 from "/img/tea2.png";
import tea3 from "/img/tea3.png";
import tea4 from "/img/tea4.png";
import dessert1 from "/img/dessert1.png";
import dessert2 from "/img/dessert2.png";
import dessert3 from "/img/dessert3.png";
import dessert4 from "/img/dessert4.png";
import dessert5 from "/img/dessert5.png";
import dessert6 from "/img/dessert6.png";
import dessert7 from "/img/dessert7.png";
import dessert8 from "/img/dessert8.png";

import { MenuItem } from "../types";

export const menu = {
  [MenuItem.TOP_CHOICES]: {
    "Caramel Macchiato": {
      title: "Caramel Macchiato",
      imgUrl: coffee10,
      description: "Fragrant classic espresso with caramel-peanut syrup, with cream under whipped thick foam.",
      price: "5.00",
    },
    Moroccan: {
      title: `Moroccan`,
      imgUrl: tea1,
      description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "4.50",
    },
    "Honey raf": {
      title: `Honey raf`,
      imgUrl: coffee3,
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: "5.50",
    },
    Cheesecake: {
      title: `Cheesecake`,
      imgUrl: dessert3,
      description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "4.50",
    },
    "Ice cappuccino": {
      title: `Ice cappuccino`,
      imgUrl: coffee4,
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: "5.00",
    },
    "Honey cake": {
      title: `Honey cake`,
      imgUrl: dessert6,
      description: "Classic honey cake with delicate custard",
      price: "4.50",
    },
  },
  [MenuItem.COFFEES]: {
    "Irish coffee": {
      title: `Irish coffee`,
      imgUrl: coffee1,
      description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: "7.00",
    },
    "Kahlua coffee": {
      title: `Kahlua coffee`,
      imgUrl: coffee2,
      description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: "7.00",
    },
    "Honey raf": {
      title: `Honey raf`,
      imgUrl: coffee3,
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: "5.50",
    },
    "Ice cappuccino": {
      title: `Ice cappuccino`,
      imgUrl: coffee4,
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: "5.00",
    },
    Espresso: {
      title: `Espresso`,
      imgUrl: coffee5,
      description: "Classic black coffee",
      price: "4.50",
    },
    Latte: {
      title: `Latte`,
      imgUrl: coffee6,
      description: "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: "5.50",
    },
    "Latte macchiato": {
      title: `Latte macchiato`,
      imgUrl: coffee7,
      description: "Espresso with frothed milk and chocolate",
      price: "5.50",
    },
    "Coffee with cognac": {
      title: `Coffee with cognac`,
      imgUrl: coffee8,
      description: "Fragrant black coffee with cognac and whipped cream",
      price: "6.50",
    },
    "S`mores Frappuccino": {
      title: "S`mores Frappuccino",
      imgUrl: coffee9,
      description: "Fragrant classic espresso with brown sugar and cinnamon before being topped with oat milk.",
      price: "5.50",
    },
    "Caramel Macchiato": {
      title: "Caramel Macchiato",
      imgUrl: coffee10,
      description: "Fragrant classic espresso with caramel-peanut syrup, with cream under whipped thick foam.",
      price: "5.00",
    },
    "Ice coffee": {
      title: "Ice coffee",
      imgUrl: coffee11,
      description: "A popular summer classic coffee with milk and ice.",
      price: "4.50",
    },
  },
  [MenuItem.TEAS]: {
    Moroccan: {
      title: `Moroccan`,
      imgUrl: tea1,
      description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "4.50",
    },
    Ginger: {
      title: `Ginger`,
      imgUrl: tea2,
      description: "Original black tea with fresh ginger, lemon and honey",
      price: "5.00",
    },
    Cranberry: {
      title: `Cranberry`,
      imgUrl: tea3,
      description: "Invigorating black tea with cranberry and honey",
      price: "5.00",
    },
    "Sea buckthorn": {
      title: `Sea buckthorn`,
      imgUrl: tea4,
      description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: "5.50",
    },
  },
  [MenuItem.DESSERTS]: {
    "Marble cheesecake": {
      title: `Marble cheesecake`,
      imgUrl: dessert1,
      description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: "3.50",
    },
    "Red velvet": {
      title: `Red velvet`,
      imgUrl: dessert2,
      description: "Layer cake with cream cheese frosting",
      price: "4.00",
    },
    Cheesecake: {
      title: `Cheesecake`,
      imgUrl: dessert3,
      description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "4.50",
    },
    "Creme brulee": {
      title: `Creme brulee`,
      imgUrl: dessert4,
      description: "Delicate creamy dessert in a caramel basket with wild berries",
      price: "4.00",
    },
    Pancakes: {
      title: `Pancakes`,
      imgUrl: dessert5,
      description: "Tender pancakes with strawberry jam and fresh strawberries",
      price: "4.50",
    },
    "Honey cake": {
      title: `Honey cake`,
      imgUrl: dessert6,
      description: "Classic honey cake with delicate custard",
      price: "4.50",
    },
    "Chocolate cake": {
      title: `Chocolate cake`,
      imgUrl: dessert7,
      description: "Cake with hot chocolate filling and nuts with dried apricots",
      price: "5.50",
    },
    "Black forest": {
      title: `Black forest`,
      imgUrl: dessert8,
      description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: "5.00",
    },
  },
};
export { MenuItem };
