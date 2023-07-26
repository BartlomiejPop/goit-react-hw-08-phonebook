// import { Component } from 'react';
import styles from './Filter.module.css';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filterBox}>
      {/* <h2>Find contacts by name</h2> */}
      {/* <input type="text" onChange={e => handleFilterChange(e)} /> */}
      <TextField
        id="standard-basic"
        type="text"
        label="Find contacts by name"
        onChange={e => handleFilterChange(e)}
        variant="standard"
        style={{ width: '40%' }}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: propTypes.func,
  names: propTypes.object,
};
