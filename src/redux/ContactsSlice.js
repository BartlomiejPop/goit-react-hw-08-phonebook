import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    names: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const isDuplicated = state.names.some(el => el.name === name);
      if (isDuplicated) {
        alert(`${name} is already in your contacts`);
        return;
      }
      const newContact = {
        name: name,
        id: nanoid(),
        number: number,
      };
      state.names.push(newContact);
      if (state.filter === '') return;
      state.filter.push(newContact);
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.names = state.names.filter(el => el.id !== contactId);
      if (state.filter === '') return;
      state.filter = state.filter.filter(el => el.id !== contactId);
    },
    setFilter: (state, action) => {
      state.filter = state.names.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
