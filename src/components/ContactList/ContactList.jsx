// import { Component } from 'react';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  let renderedContacts;
  if (filteredContacts === `` || filteredContacts === []) {
    renderedContacts = contacts;
  } else {
    renderedContacts = filteredContacts;
  }
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    // {filteredContacts===``||filteredContacts===[]?contacts:filteredContacts}
    <ul className={styles.contacts}>
      {renderedContacts.map(n => (
        <li className={styles.contact} key={n.id}>
          <div className={styles.name}>{n.name}</div>
          <div className={styles.number}> {n.number}</div>
          {/* <button
            className={styles.button}
            type="button"
            onClick={() => {
              handleDelete(n.id);
            }}
          >
            Delete
          </button> */}
          <Button
            type="button"
            variant="outlined"
            onClick={() => {
              handleDelete(n.id);
            }}
            style={{ width: '70px', fontSize: '12px' }}
          >
            Delete
          </Button>
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
