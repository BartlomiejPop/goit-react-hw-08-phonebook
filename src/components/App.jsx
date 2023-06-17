import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    names: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //   const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');

  componentDidUpdate() {
    console.log('test');
    const state = this.state.names.map(el => JSON.stringify(el));
    const previousState = localStorage.getItem('state');
    let items = [];
    if (previousState) {
      items = JSON.parse(previousState);
    }
    items.push(state);
    localStorage.setItem('state', JSON.stringify(items));
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      const state = localStorage.getItem('state');
      const parsedState = JSON.parse(state);
      console.log(parsedState);
      const parsedStateArr = parsedState.map(el => JSON.parse(el));
      console.log(parsedStateArr);
      this.setState({ names: parsedStateArr });
      // console.log(this.state);
    }
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
    const updatedContacts = this.state.names.filter(el => el.id !== contact);
    console.log(updatedContacts);
    console.log(contact);
    this.setState({ names: updatedContacts, filter: updatedContacts });
  };

  handleFilterChange = e => {
    // this.setState({ filter: value });
    // this.setState({
    //   filter: this.state.names.filter(el =>
    //     el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    //   ),
    // });
    const filteredNames = this.state.names.filter(el =>
      el.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filteredNames);
    // console.log(e.target.value);
    this.setState({ filter: filteredNames });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewName} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <ContactList
          names={
            // this.state.names
            this.state.filter === '' ? this.state.names : this.state.filter
          }
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
