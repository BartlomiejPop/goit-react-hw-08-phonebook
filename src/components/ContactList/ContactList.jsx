import { Component } from 'react';
import { Filter } from '../Filter/Filter';

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
      <ul>
        {names.names.map(n => (
          <li key={n.id}>
            {n.name} {n.number}{' '}
            <button
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
