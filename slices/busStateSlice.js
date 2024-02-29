import { createSlice } from "@reduxjs/toolkit";

export const busStateSlice = createSlice({
  name: "busState",
  initialState: {
    value: {
        color: "#F28627",
        fareMultiplier: 5,
        index: 0
    },
  },
  reducers: {
    setBusState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBusState } = busStateSlice.actions;

export default busStateSlice.reducer;
