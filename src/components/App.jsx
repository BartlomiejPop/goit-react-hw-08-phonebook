import React, { Component } from 'react';
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
    filter: '',
  };

  addNewName = (name, number) => {
    let isDuplicated = false;
    this.state.names.map(el => {
      if (el.name === name) {
        alert(`${name} is already in your contacts`);
        isDuplicated = true;
      }
    });
    if (!isDuplicated) {
      this.setState(prevState => ({
        names: [
          ...prevState.names,
          {
            name,
            id: nanoid(),
            number: number,
          },
        ],
        filter: [
          ...prevState.names,
          {
            name,
            id: nanoid(),
            number: number,
          },
        ],
      }));
    }
  };

  deleteContact = contact => {
    this.setState({ names: contact, filter: contact });
  };

  handleFilter = value => {
    // this.setState({ filter: value });
    this.setState({
      filter: this.state.names.filter(el =>
        el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ),
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewName} />
        <h2>Contacts</h2>
        <Filter names={this.state} onChange={this.handleFilter} />
        <ContactList
          names={
            this.state.filter === '' ? this.state.names : this.state.filter
          }
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
