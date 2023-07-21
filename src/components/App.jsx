import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/contactsSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const names = useSelector(state => state.contacts.names);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const addNewName = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDelete = contact => {
    dispatch(deleteContact(contact));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    console.log('mounted');
    // const storedState = localStorage.getItem('state');
    // if (storedState) {
    //   const parsedState = JSON.parse(storedState);
    //   parsedState.forEach(el => {
    //     const name = el.name;
    //     const number = el.number;
    dispatch(fetchContacts());
    // });

    // names.push(parsedState);
  }, [dispatch]);

  useEffect(() => {
    console.log('actualized');
    addContact(JSON.stringify(names));
    // localStorage.setItem('state', JSON.stringify(names));
    // changeFilter([...names]);
  }, [names]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewName} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList
        names={filter === '' ? names : filter}
        deleteContact={handleDelete}
      />
    </div>
  );
};
