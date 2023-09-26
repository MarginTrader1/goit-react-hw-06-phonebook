import { createAction } from "@reduxjs/toolkit";


/* добавляем новый контакт */
export const addContact = createAction('contacts/addContact')


/* удаляем новый контакт */
export const deleteContact = createAction('contacts/deleteContact')


/* добавляем фильтр */
export const addFilter = createAction('filter/addFilter')







/** -------------Старый код Redux-------------------
 * 
/* добавляем новый контакт 
export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};

/* удаляем новый контакт 
export const deleteContact = newList => {
  return {
    type: 'contacts/deleteContact',
    payload: newList,
  };
};

/* добавляем фильтр 
export const addFilter = value => {
  return {
    type: 'filter/addFilter',
    payload: value,
  };
};
*/