import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import memoize from "memoize-one";

import { RootState } from "..";
import { Menu, MenuItem, NormalizedMenuData, ProductDetails } from "../../types";

import { normalizeMenuData } from "../../data/menuData";

type SetDataPayload = {
  menu: Menu;
  productDetails: ProductDetails;
};

// create Action
export const setData = createAction<SetDataPayload>("setData");

// create Selector
const selectData = (state: RootState) => state.data;
export const selectCategoryByMenuItem = memoize((menuItem: MenuItem) =>
  createSelector([selectData], (data) => {
    return data[menuItem];
  })
);

export const selectAdditivesByMenuItem = memoize((menuItem: MenuItem) =>
  createSelector([selectCategoryByMenuItem(menuItem)], (category) => {
    return category.additives;
  })
);

// declare initialState
const initialState: NormalizedMenuData = {} as NormalizedMenuData;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setData, (_, action) => {
      return normalizeMenuData(action.payload.menu, action.payload.productDetails);
    });
  },
});

export const dataReducer = dataSlice.reducer;

() => {
  return () => {};
};
