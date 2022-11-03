import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.error = null;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
