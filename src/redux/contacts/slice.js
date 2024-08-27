import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { selectContacts } from "./selectors";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./operations";
import { selectNameFilter } from "../filters/selectors";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })

      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.error = false;
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          // state.error = false;
          state.loading = false;
        }
      );
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const contactsReducer = contactsSlice.reducer;
