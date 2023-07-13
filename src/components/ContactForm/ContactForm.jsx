import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import propTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const [name, changeName] = useState('');
  const [number, changeNumber] = useState('');

  const handleNameChange = e => {
    const value = e.target.value;
    changeName(value);
  };

  const handleTelChange = e => {
    const value = e.target.value;
    changeNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newName = name;
    const newNumber = number;
    onSubmit(newName, newNumber);
    changeName('');
    changeNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleNameChange}
        />
        <h2>Number</h2>
        <input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleTelChange}
        />
        <button className={styles.addContact}>Add contact</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addNewName: propTypes.func,
};
