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

import {
  TbSquareRoundedLetterS,
  TbSquareRoundedLetterM,
  TbSquareRoundedLetterL,
  TbSquareRoundedNumber1,
  TbSquareRoundedNumber2,
  TbSquareRoundedNumber3,
} from "react-icons/tb";

import { Additive, Menu, MenuItem, NormalizedMenuData, ProductDetails, Size, MenuCategory } from "../types";
import { normalizeData } from "../utils";

export const menu: Menu = {
  [MenuItem.TOP_CHOICES]: [
    {
      title: `Honey cake`,
      imgUrl: dessert6,
      description: "Classic honey cake with delicate custard",
      price: "4.50",
    },
    {
      title: "Caramel Macchiato",
      imgUrl: coffee10,
      description: "Fragrant classic espresso with caramel-peanut syrup, with cream under whipped thick foam.",
      price: "5.00",
    },
    {
      title: `Moroccan`,
      imgUrl: tea1,
      description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "4.50",
    },
    {
      title: `Honey raf`,
      imgUrl: coffee3,
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: "5.50",
    },
    {
      title: `Cheesecake`,
      imgUrl: dessert3,
      description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "4.50",
    },
    {
      title: `Ice cappuccino`,
      imgUrl: coffee4,
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: "5.00",
    },
  ],
  [MenuItem.COFFEES]: [
    {
      title: `Irish coffee`,
      imgUrl: coffee1,
      description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      price: "7.00",
    },
    {
      title: `Kahlua coffee`,
      imgUrl: coffee2,
      description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      price: "7.00",
    },
    {
      title: `Honey raf`,
      imgUrl: coffee3,
      description: "Espresso with frothed milk, cream and aromatic honey",
      price: "5.50",
    },
    {
      title: `Ice cappuccino`,
      imgUrl: coffee4,
      description: "Cappuccino with soft thick foam in summer version with ice",
      price: "5.00",
    },
    {
      title: `Espresso`,
      imgUrl: coffee5,
      description: "Classic black coffee",
      price: "4.50",
    },
    {
      title: `Latte`,
      imgUrl: coffee6,
      description: "Espresso coffee with the addition of steamed milk and dense milk foam",
      price: "5.50",
    },
    {
      title: `Latte macchiato`,
      imgUrl: coffee7,
      description: "Espresso with frothed milk and chocolate",
      price: "5.50",
    },
    {
      title: `Coffee with cognac`,
      imgUrl: coffee8,
      description: "Fragrant black coffee with cognac and whipped cream",
      price: "6.50",
    },
    {
      title: `S'mores Frappuccino`,
      imgUrl: coffee9,
      description: "Fragrant classic espresso with brown sugar and cinnamon before being topped with oat milk.",
      price: "5.50",
    },
    {
      title: "Caramel Macchiato",
      imgUrl: coffee10,
      description: "Fragrant classic espresso with caramel-peanut syrup, with cream under whipped thick foam.",
      price: "5.00",
    },
    {
      title: "Ice coffee",
      imgUrl: coffee11,
      description: "A popular summer classic coffee with milk and ice.",
      price: "4.50",
    },
  ],
  [MenuItem.TEAS]: [
    {
      title: `Moroccan`,
      imgUrl: tea1,
      description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      price: "4.50",
    },
    {
      title: `Ginger`,
      imgUrl: tea2,
      description: "Original black tea with fresh ginger, lemon and honey",
      price: "5.00",
    },
    {
      title: `Cranberry`,
      imgUrl: tea3,
      description: "Invigorating black tea with cranberry and honey",
      price: "5.00",
    },
    {
      title: `Sea buckthorn`,
      imgUrl: tea4,
      description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      price: "5.50",
    },
  ],
  [MenuItem.DESSERTS]: [
    {
      title: `Marble cheesecake`,
      imgUrl: dessert1,
      description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      price: "3.50",
    },
    {
      title: `Red velvet`,
      imgUrl: dessert2,
      description: "Layer cake with cream cheese frosting",
      price: "4.00",
    },
    {
      title: `Cheesecake`,
      imgUrl: dessert3,
      description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      price: "4.50",
    },
    {
      title: `Creme brulee`,
      imgUrl: dessert4,
      description: "Delicate creamy dessert in a caramel basket with wild berries",
      price: "4.00",
    },
    {
      title: `Pancakes`,
      imgUrl: dessert5,
      description: "Tender pancakes with strawberry jam and fresh strawberries",
      price: "4.50",
    },
    {
      title: `Honey cake`,
      imgUrl: dessert6,
      description: "Classic honey cake with delicate custard",
      price: "4.50",
    },
    {
      title: `Chocolate cake`,
      imgUrl: dessert7,
      description: "Cake with hot chocolate filling and nuts with dried apricots",
      price: "5.50",
    },
    {
      title: `Black forest`,
      imgUrl: dessert8,
      description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      price: "5.00",
    },
  ],
};

export const productDetails: ProductDetails = {
  [MenuItem.COFFEES]: {
    size: {
      [Size.S]: {
        icon: <TbSquareRoundedLetterS className="w-8 h-8" />,
        text: "200 ml",
        price: 0,
      },
      [Size.M]: {
        icon: <TbSquareRoundedLetterM className="w-8 h-8" />,
        text: "300 ml",
        price: 1,
      },
      [Size.L]: {
        icon: <TbSquareRoundedLetterL className="w-8 h-8" />,
        text: "400 ml",
        price: 2.5,
      },
    },
    additives: {
      [Additive.FIRST]: {
        icon: <TbSquareRoundedNumber1 className="w-8 h-8" />,
        text: "Sugar",
        price: 0.5,
      },
      [Additive.SECOND]: {
        icon: <TbSquareRoundedNumber2 className="w-8 h-8" />,
        text: "Cinnamon",
        price: 1,
      },
      [Additive.THIRD]: {
        icon: <TbSquareRoundedNumber3 className="w-8 h-8" />,
        text: "Syrup",
        price: 2,
      },
    },
  },
  [MenuItem.TEAS]: {
    size: {
      [Size.S]: {
        icon: <TbSquareRoundedLetterS className="w-8 h-8" />,
        text: "200 ml",
        price: 0,
      },
      [Size.M]: {
        icon: <TbSquareRoundedLetterM className="w-8 h-8" />,
        text: "300 ml",
        price: 1,
      },
      [Size.L]: {
        icon: <TbSquareRoundedLetterL className="w-8 h-8" />,
        text: "400 ml",
        price: 2.5,
      },
    },
    additives: {
      [Additive.FIRST]: {
        icon: <TbSquareRoundedNumber1 className="w-8 h-8" />,
        text: "Sugar",
        price: 0.5,
      },
      [Additive.SECOND]: {
        icon: <TbSquareRoundedNumber2 className="w-8 h-8" />,
        text: "Lemon",
        price: 1,
      },
      [Additive.THIRD]: {
        icon: <TbSquareRoundedNumber3 className="w-8 h-8" />,
        text: "Syrup",
        price: 2,
      },
    },
  },
  [MenuItem.DESSERTS]: {
    size: {
      [Size.S]: {
        icon: <TbSquareRoundedLetterS className="w-8 h-8" />,
        text: "150 g",
        price: 0,
      },
      [Size.M]: {
        icon: <TbSquareRoundedLetterM className="w-8 h-8" />,
        text: "250 g",
        price: 1,
      },
      [Size.L]: {
        icon: <TbSquareRoundedLetterL className="w-8 h-8" />,
        text: "350 g",
        price: 2.5,
      },
    },
    additives: {
      [Additive.FIRST]: {
        icon: <TbSquareRoundedNumber1 className="w-8 h-8" />,
        text: "Berries",
        price: 2,
      },
      [Additive.SECOND]: {
        icon: <TbSquareRoundedNumber2 className="w-8 h-8" />,
        text: "Nuts",
        price: 2.5,
      },
      [Additive.THIRD]: {
        icon: <TbSquareRoundedNumber3 className="w-8 h-8" />,
        text: "Jam",
        price: 2,
      },
    },
  },
};

function normalizeMenuData(menuData: Menu) {
  const normalizedMenuData = {} as Record<string, NormalizedMenuData>; // string as a key, NormalizedMenuData as a value

  for (const [key, data] of Object.entries<MenuCategory>(menuData)) {
    normalizedMenuData[key] = normalizeData(data);
  }

  return normalizedMenuData;
}

export const normalizedMenuData = normalizeMenuData(menu);
