import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type } from "os";

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title:string;
};
interface initialState {
  cart: Product[];
}
const initialState: initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
      // console.log(action.payload)
      // [...state.cart,action.payload]
      // console.log(state.cart)
    },
    removeFromCart: (state, action:PayloadAction<number>) => {
 state.cart=state.cart.filter((ele)=>ele.id!==action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
