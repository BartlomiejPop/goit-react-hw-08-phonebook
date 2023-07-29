import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import React from 'react';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    let newName = form.elements.name.value;
    let newNumber = form.elements.number.value;
    dispatch(
      addContact({
        name: newName,
        number: newNumber,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          type="text"
          name="name"
          inputProps={{
            pattern: "^[A-Za-z.'- ]+$",
          }}
          label="Name"
          variant="standard"
          style={{ width: '60%', alignSelf: 'center' }}
        />
        <TextField
          id="standard-basic"
          type="text"
          name="number"
          inputProps={{
            pattern: '^[0-9]*$',
          }}
          label="Number"
          variant="standard"
          style={{ width: '60%', alignSelf: 'center' }}
        />
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
