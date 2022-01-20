import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  items: [],
};

export const slice = createSlice({
  name: "item",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addtoBasket: (state, action) => {
      state.value = action.payload;
    },
    addtoList: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addtoBasket, addtoList } = slice.actions;

export default slice.reducer;
