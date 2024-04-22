import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Additive, MenuCard, MenuItem, Size } from "../../types";
import { RootState } from "..";

type CartItem = {
  finalPrice: number;
  selectedSize: Size;
  selectedAdditives: Additive[];
  category: MenuItem;
  id: string;
} & Pick<MenuCard, "title" | "imgUrl">;

type ExtendedCartItem = CartItem & {
  quantity: number;
};

interface CartState {
  items: ExtendedCartItem[];
}

// create selectors
const selectCart = (state: RootState) => state.cart; // all cart data
export const selectCartItems = createSelector([selectCart], (cart) => cart.items); // array of cart items
export const selectIsCartEmpty = createSelector([selectCartItems], (cartItems) => !cartItems.length);

// calculate totalPrice in cart
export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => {
    const itemPrice = item.finalPrice * item.quantity;
    return (acc += itemPrice);
  }, 0)
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const updatedState = state.items.filter((item) => item.id !== action.payload);

      state.items = updatedState;
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item?.quantity) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
