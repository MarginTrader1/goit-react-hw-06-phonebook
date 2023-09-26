import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Rosie Eden', number: '555-00-26' },
  { id: 'id-6', name: 'Clement Young', number: '344-01-46' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        return;
      },
      prepare(newContact) {
        return { payload: newContact };
      },
    },

    deleteContact: {
      reducer(state, action) {
        return [...action.payload];
      },
      prepare(newList) {
        return { payload: newList };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
