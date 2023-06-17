// import { Component } from 'react';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';

export const ContactList = ({ names, deleteContact }) => {
  // console.log(names);
  // state = {
  //   names: this.props,
  // };

  // const componentDidMount = () => {
  //   if (localStorage.getItem('state')) {
  //     const state = localStorage.getItem('state');
  //     const parsedState = JSON.parse(state);
  //     this.setState({ names: parsedState });
  //     console.log(this.state);
  //   }
  // };

  // const deleteContact = key => {
  //   const filter = props.names.filter(el => el.id !== key);
  //   console.log(filter);
  //   return filter;
  // };

  // render() {
  //   const names = this.props;
  //   console.log(names);
  return (
    <ul className={styles.contacts}>
      {names.map(n => (
        <li className={styles.contact} key={n.id}>
          {n.name} {n.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              deleteContact(n.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
// }

ContactList.propTypes = {
  deleteContact: propTypes.func,
  names: propTypes.array,
};
