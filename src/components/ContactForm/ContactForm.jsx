import { Component } from 'react';
import styles from './ContactForm.module.css';
import propTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  handleNameChange = e => {
    const value = e.target.value;
    this.setState({ name: value });
  };

  handleTelChange = e => {
    const value = e.target.value;
    this.setState({ number: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const number = this.state.number;

    this.props.onSubmit(name, number);

    // resetujemy dane
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleNameChange}
          />
          <h2>Number</h2>
          <input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleTelChange}
          />
          <button className={styles.addContact}>Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addNewName: propTypes.func,
};
