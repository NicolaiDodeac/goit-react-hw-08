import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { filterContact } = filtersSlice.actions;
