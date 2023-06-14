import { Component } from 'react';

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
    console.log(filteredNames);
    console.log(this.state);
    // this.props.onChange(filteredNames);
    console.log(this.props);
    // console.log(
    //   this.props.names.names.map(el => {
    //     el.startsWith(this.state.filter);
    //   })
    // );
  };

  render() {
    return (
      <div>
        <h2>Find contacts by name</h2>
        <input type="text" onChange={this.handleFilter} />
      </div>
    );
  }
}
