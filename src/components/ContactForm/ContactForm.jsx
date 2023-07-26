import React from // { useState }
'react';
import styles from './ContactForm.module.css';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
// import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ContactForm = () => {
  const dispatch = useDispatch();
  // const [name, changeName] = useState('');
  // const [number, changeNumber] = useState('');

  // const handleNameChange = e => {
  //   const value = e.target.value;
  //   changeName(value);
  // };

  // const handleTelChange = e => {
  //   const value = e.target.value;
  //   changeNumber(value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    let newName = form.elements.name.value;
    let newNumber = form.elements.number.value;
    // onSubmit(newName, newNumber);
    dispatch(addContact(newName, newNumber));
    // changeName('');
    // changeNumber('');
    form.reset();
  };
  //a

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <h2>Name</h2> */}
        {/* <input
          type="text"
          value={name}
          name="name"
          pattern="^[A-Za-z.'\- ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleNameChange}
        /> */}
        <TextField
          id="standard-basic"
          type="text"
          // value={name}
          name="name"
          pattern="^[A-Za-z.'\- ]+$"
          label="Name"
          // onChange={handleNameChange}
          variant="standard"
          style={{ width: '60%', alignSelf: 'center' }}
        />
        {/* <h2>Number</h2>
        <input
          type="tel"
          value={number}
          name="number"
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleTelChange}
        /> */}
        <TextField
          id="standard-basic"
          type="text"
          // value={number}
          name="number"
          pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
          label="Number"
          // onChange={handleTelChange}
          variant="standard"
          style={{ width: '60%', alignSelf: 'center' }}
        />
        {/* <button className={styles.addContact}>Add contact</button> */}
        <Button
          type="submit"
          variant="outlined"
          style={{ marginTop: '20px', width: '250px', alignSelf: 'center' }}
        >
          Add contact
        </Button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addNewName: propTypes.func,
};
