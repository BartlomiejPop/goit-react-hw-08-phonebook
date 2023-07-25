// import { Component } from 'react';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactList = ({ deleteContact }) => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact());

  return (
    <ul className={styles.contacts}>
      {contacts.map(n => (
        <li className={styles.contact} key={n.id}>
          {n.name} {n.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              handleDelete(n.id);
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
