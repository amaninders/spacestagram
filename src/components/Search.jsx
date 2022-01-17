import React, { Component } from 'react'

export class Search extends Component {

  state = { search: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <form className="container mt-3 mb-3 input-group mb-3" onSubmit={this.onFormSubmit}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="search" 
          value={this.state.search}
          onChange={e => this.setState({search: e.target.value})}
        />
      </form>
    )
  }
}

export default Search
