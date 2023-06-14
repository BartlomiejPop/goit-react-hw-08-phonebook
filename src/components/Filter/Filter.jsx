import { Component } from 'react';
import styles from './Filter.module.css';
import propTypes from 'prop-types';

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
      return null;
    });

    this.setState({ filter: filteredNames });
    this.props.onChange(value);
  };

  render() {
    return (
      <div className={styles.filterBox}>
        <h2>Find contacts by name</h2>
        <input type="text" onChange={this.handleFilter} />
      </div>
    );
  }
}

Filter.propTypes = {
  handleFilter: propTypes.func,
  names: propTypes.object,
};
