// import { Component } from 'react';
import styles from './Filter.module.css';
import propTypes from 'prop-types';

export const Filter = ({ handleFilterChange }) => {
  return (
    <div className={styles.filterBox}>
      <h2>Find contacts by name</h2>
      <input type="text" onChange={e => handleFilterChange(e)} />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: propTypes.func,
  names: propTypes.object,
};
