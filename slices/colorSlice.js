import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: "#F28627",
  },
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
