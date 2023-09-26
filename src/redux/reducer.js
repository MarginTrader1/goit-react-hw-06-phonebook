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

export const contactsReduser = (state, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return [...action.payload];
    default:
      return state;
  }
};

export const filterReduser = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'filter/addFilter':
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = (state = initialState, action) => {
  // Повертаємо об'єкт стану
  return {
    /* Обом редюсерам передаємо тільки частину стану, 
    за яку вони відповідають. */
    contacts: contactsReduser(state.contacts, action),
    filter: filterReduser(state.filter, action),
  };
};
