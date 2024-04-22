import { ReactElement } from "react";
import { IconType } from "react-icons";

// slider
export type Slide = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

export type Slides = Slide[];

// menu
export enum MenuItem {
  COFFEES = "coffee",
  TEAS = "tea",
  DESSERTS = "dessert",
}

export type MenuCard = {
  title: string;
  imgUrl: string;
  description: string;
  price: string;
};

export type MenuCategory = MenuCard[];

export type Menu = Record<MenuItem, MenuCategory>;

export type MenuItemDetails = {
  size: Record<Size, Detail>;
  additives: Record<Additive, Detail>;
};

export type ProductDetails = Record<MenuItem, MenuItemDetails>;

export enum Size {
  S = "S",
  M = "M",
  L = "L",
}

export enum Additive {
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
}

export type Detail = {
  icon: ReactElement<IconType>;
  text: string;
  price: number;
};

export type NormalizedMenuCategory<T extends { title: string }> = Record<T["title"], T>;

export type NormalizedMenuCategoryData = { products: NormalizedMenuCategory<MenuCard> } & MenuItemDetails;
export type NormalizedMenuData = Record<MenuItem, NormalizedMenuCategoryData>;
