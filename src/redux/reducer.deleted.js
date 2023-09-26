import { addContact, deleteContact, addFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Rosie Eden', number: '555-00-26' },
    { id: 'id-6', name: 'Clement Young', number: '344-01-46' },
  ],
  filter: '',
};


export const contactsReduser = createReducer(initialState.contacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => [...action.payload],
});

export const filterReduser = createReducer(initialState.filter, {
  [addFilter]: (state, action) => action.payload,
});



/** -------------- старый код Redux-----------------------
 * 
 * export const contactsReduser = (state = initialState.contacts, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];
    case deleteContact.type:
      return [...action.payload];
    default:
      return state;
  }
};

export const filterReduser = (state = initialState.filter, action) => {
  // console.log(state);
  // console.log(action);

  switch (action.type) {
    case addFilter.type:
      return action.payload;
    default:
      return state;
  }
};

 */