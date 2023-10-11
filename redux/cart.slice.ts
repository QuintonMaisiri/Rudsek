import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { data: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemExists: any = state.data.find((item: any) => item.id === action.payload.id)
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item: any = state.data.find((item: any) => item.id === action.payload.id)
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item: any = state.data.find((item: any) => item.id === action.payload.id)
      console.log(action.payload)
      if (item.quantity === 1) {
        const index = state.data.findIndex((item: any) => item.id === action.payload.id);
        state.data.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.data.findIndex((item: any) => item.id === action.payload.id);
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