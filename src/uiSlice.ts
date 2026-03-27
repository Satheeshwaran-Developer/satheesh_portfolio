import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: { dark: true },
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggle } = slice.actions;
export default slice.reducer;