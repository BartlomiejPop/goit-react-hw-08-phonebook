// import { Component } from 'react';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';

export const ContactList = ({ names, deleteContact }) => {
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
