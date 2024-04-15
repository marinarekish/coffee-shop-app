import { MenuCard, NormalizedMenuCategory } from "../types";

// pass to function generic T (type of data)extends type MenuCard // data = array of T // return type NormalizedMenuCategory<T>
export function normalizeData<T extends MenuCard>(data: T[]): NormalizedMenuCategory<T> {
  return data.reduce((acc, item) => {
    acc[item.title as T["title"]] = item;

    return acc;
  }, {} as NormalizedMenuCategory<T>); // default {} as NormalizedMenuCategory<T> - types should be the same
}
