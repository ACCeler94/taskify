import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  query: string;
  sortBy: string;
  sortingOrder: "asc" | "desc";
}

export const initialState: InitialState = {
  query: "",
  sortBy: "createdAt",
  sortingOrder: "asc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    changeSortingOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.sortingOrder = action.payload;
    },
  },
});

export const { updateSearchQuery, changeSortingOrder } = filterSlice.actions;
export default filterSlice.reducer;
