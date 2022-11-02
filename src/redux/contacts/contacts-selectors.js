import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filter-selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
