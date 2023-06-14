import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    names: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addNewName = (name, number) => {
    this.setState(prevState => ({
      names: [
        ...prevState.names,
        {
          name,
          id: nanoid(),
          number: number,
        },
      ],
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewName} />
        <h2>Contacts</h2>
        <Filter names={this.state} />
        <ContactList names={this.state} />
      </div>
    );
  }
}
