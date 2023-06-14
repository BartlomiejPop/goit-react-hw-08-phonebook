import { Component } from 'react';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';

export class ContactList extends Component {
  state = {
    names: this.props,
  };

  deleteContact = key => {
    this.props.onClick(this.props.names.filter(el => el.id !== key));
    this.setState({ names: this.props.names });
    return this.props.names.filter(el => el.id !== key);
  };

  render() {
    const names = this.props;
    return (
      <ul className={styles.contacts}>
        {names.names.map(n => (
          <li className={styles.contact} key={n.id}>
            {n.name} {n.number}{' '}
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                this.deleteContact(n.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  deleteContact: propTypes.func,
  names: propTypes.array,
};
