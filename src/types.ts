export enum EntityType {
  COFFEE = "coffee",
  TEA = "tea",
  DESSERT = "dessert",
}

export type Slide = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

export type Slides = Slide[];

export type MenuItem = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

export type MenuCategory = MenuItem[];

export type Menu = Record<EntityType, MenuCategory>;
