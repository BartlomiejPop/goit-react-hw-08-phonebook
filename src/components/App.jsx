import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    names: [],
    filter: '',
  };

  // componentDidMount() {
  //   if (localStorage.getItem('state')) {
  //     const state = JSON.parse(localStorage.getItem('state'));
  //     this.setState = state;
  //   }
  // }

  componentDidUpdate() {
    const state = JSON.stringify(this.state);
    const previousState = localStorage.getItem('state');
    let items = [];
    if (previousState) {
      items = JSON.parse(previousState);
    }
    items.push(state);
    localStorage.setItem('state', JSON.stringify(items));
  }

  addNewName = (name, number) => {
    let isDuplicated = false;
    this.state.names.map(el => {
      if (el.name === name) {
        alert(`${name} is already in your contacts`);
        isDuplicated = true;
      }
      return null;
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
    console.log(contact);
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
