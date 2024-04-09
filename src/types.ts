export enum MenuItem {
  TOP_CHOICES = "top",
  COFFEES = "coffee",
  TEAS = "tea",
  DESSERTS = "dessert",
}

export type Slide = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

export type Slides = Slide[];

export type MenuCard = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

export type MenuCategory = MenuCard[];

export type Menu = Record<MenuItem, MenuCategory>;
