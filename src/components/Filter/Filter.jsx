// import { Component } from 'react';
import styles from './Filter.module.css';
import propTypes from 'prop-types';

export const Filter = ({ handleFilterChange }) => {
  // const state = {
  //   filter: '',
  // };
  // handleFilter = e => {
  //   let value = e.target.value;
  //   this.setState({ filter: value });
  //   const namesArr = this.props.names.names.map(el => el.name);
  //   let filteredNames = [];
  //   namesArr.map(el => {
  //     if (el.toLowerCase().includes(value.toLowerCase())) {
  //       filteredNames.push(el);
  //     }
  //     return null;
  //   });
  //   console.log(filteredNames);
  //   this.setState({ filter: filteredNames });
  //   this.props.onChange(value);
  // };
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
