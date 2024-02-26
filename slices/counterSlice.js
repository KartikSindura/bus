import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    set: (state, action) => {
        state.value = action.payload;
    }
  },
});

export const { increment, decrement, set } = counterSlice.actions;

export default counterSlice.reducer;
