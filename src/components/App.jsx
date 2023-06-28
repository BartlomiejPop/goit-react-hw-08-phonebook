import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [names, changeNames] = useState([]);
  const [filter, changeFilter] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // console.log('mounted');
    setIsMounted(true);
    const storedState = localStorage.getItem('state');
    if (!storedState) return;
    const parsedState = JSON.parse(storedState);
    // console.log(parsedState);
    changeNames(parsedState);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    // console.log('actualized');
    localStorage.setItem('state', JSON.stringify(names));
    console.log(names);
  }, [names, isMounted]);

  const addNewName = (name, number) => {
    let isDuplicated = false;
    names.map(el => {
      if (el.name === name) {
        alert(`${name} is already in your contacts`);
        isDuplicated = true;
      }
      return null;
    });
    if (!isDuplicated) {
      changeNames(prev => [
        ...prev,
        {
          name: name,
          id: nanoid(),
          number: number,
        },
      ]);
      changeFilter(prev => [
        ...prev,
        {
          name: name,
          id: nanoid(),
          number: number,
        },
      ]);
    }
  };

  const deleteContact = contact => {
    const updatedContacts = names.filter(el => el.id !== contact);
    changeNames(updatedContacts);
    changeFilter(updatedContacts);
  };

  const handleFilterChange = e => {
    const filteredNames = names.filter(el =>
      el.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    changeFilter(filteredNames);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewName} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        names={filter === [] ? names : filter}
        deleteContact={deleteContact}
      />
    </div>
  );
};
