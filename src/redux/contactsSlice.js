import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./contactsOps";

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
        state.loading = false;
      })
      .addCase(fetchContactsThunk.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContactThunk.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContactThunk.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.error = false;
          state.loading = true;
        }
      );
  },
});
// // Мемоізований селектор для фільтрації контактів
// export const selectContacts = (state) => state.contacts.items;
// export const selectFilter = (state) => state.filter;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const contactsReducer = contactsSlice.reducer;
