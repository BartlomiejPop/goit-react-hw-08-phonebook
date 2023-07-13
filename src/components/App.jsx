import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/ContactsSlice';

export const App = () => {
  const names = useSelector(state => state.contacts.names);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('mounted');
    const storedState = localStorage.getItem('state');
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      parsedState.forEach(el => {
        const name = el.name;
        const number = el.number;
        dispatch(addContact({ name, number }));
      });

      // names.push(parsedState);
    }
  }, [dispatch]);

  useEffect(() => {
    console.log('actualized');
    localStorage.setItem('state', JSON.stringify(names));
    // changeFilter([...names]);
  }, [names]);

  const addNewName = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDelete = contact => {
    dispatch(deleteContact(contact));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewName} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        names={filter === '' ? names : filter}
        deleteContact={handleDelete}
      />
    </div>
  );
};
