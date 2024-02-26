import { createSlice } from "@reduxjs/toolkit";

export const fareSlice = createSlice({
  name: "fare",
  initialState: {
    value: 5,
  },
  reducers: {
    setFareMultiplier: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFareMultiplier } = fareSlice.actions;

export default fareSlice.reducer;
