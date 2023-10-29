import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { data: [] },
  reducers: {
    addToCart: (state : any, action : any) => {
      const itemExists: any = state.data.find((item: any) => item.name === action.payload.name)
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item: any = state.data.find((item: any) => item.name === action.payload.name)
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item: any = state.data.find((item: any) => item.name === action.payload.name)
      console.log(action.payload)
      if (item.quantity === 1) {
        const index = state.data.findIndex((item: any) => item.name === action.payload.name);
        state.data.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.data.findIndex((item: any) => item.name === action.payload.name);
      state.data.splice(index, 1);
    },
    emptyCart: (state)=>{
      state.data = []
    }
  },
}
)

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;