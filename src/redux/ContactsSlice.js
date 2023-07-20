import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    names: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    // addContact: (state, action) => {
    //      const { name, number } = action.payload;
    //      const isDuplicated = state.names.some(el => el.name === name);
    //      if (isDuplicated) {
    //        alert(`${name} is already in your contacts`);
    //        return;
    //      }
    //      const newContact = {
    //        name: name,
    //        id: nanoid(),
    //        number: number,
    //      };
    //      state.names.push(newContact);
    //      if (state.filter === '') return;
    //      state.filter.push(newContact);
    // },
    // deleteContact: (state, action) => {
    //   const contactId = action.payload;
    //   state.names = state.names.filter(el => el.id !== contactId);
    //   if (state.filter === '') return;
    //   state.filter = state.filter.filter(el => el.id !== contactId);
    // },
    setFilter: (state, action) => {
      state.filter = state.names.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.names = action.payload;
      // action.payload.array.forEach(element => {

      // });
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      const { name, number } = action.payload;
      const isDuplicated = state.names.some(el => el.name === name);
      if (isDuplicated) {
        alert(`${name} is already in your contacts`);
        return;
      }
      const newContact = {
        name,
        id: nanoid(),
        number,
      };
      state.names.push(newContact);
      if (state.filter === '') return;
      state.filter.push(newContact);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const contactId = action.payload.id;
      state.names = state.names.filter(el => el.id !== contactId);
      if (state.filter === '') return;
      state.filter = state.filter.filter(el => el.id !== contactId);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
