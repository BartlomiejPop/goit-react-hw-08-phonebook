import { Component } from 'react';
import { ContactList } from '../ContactList/ContactList';

export class Filter extends Component {
  state = {
    filter: '',
  };
  handleFilter = e => {
    let value = e.target.value;
    this.setState({ filter: value });
    const namesArr = this.props.names.names.map(el => el.name);
    let filteredNames = [];
    namesArr.map(el => {
      if (el.toLowerCase().includes(value.toLowerCase())) {
        filteredNames.push(el);
      }
    });
    // console.log(this.state);
    // this.props.onChange(filteredNames);

    this.setState({ filter: filteredNames });
    this.props.onChange(value);
  };

  render() {
    return (
      <>
        <h2>Find contacts by name</h2>
        <input type="text" onChange={this.handleFilter} />
      </>
    );
  }
}
