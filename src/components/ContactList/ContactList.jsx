import { Component } from 'react';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';

export class ContactList extends Component {
  state = {
    names: this.props,
  };

  componentDidMount() {
    if (localStorage.getItem('state')) {
      const state = localStorage.getItem('state');
      const parsedState = JSON.parse(state);
      this.setState({ names: parsedState });
      console.log(this.state);
    }
  }

  deleteContact = key => {
    this.props.onClick(this.props.names.filter(el => el.id !== key));
    this.setState({ names: this.props.names });
  };

  render() {
    const names = this.props;
    console.log(names);
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
