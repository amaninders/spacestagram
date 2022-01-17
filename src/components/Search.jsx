import React, { Component } from 'react'

export class Search extends Component {

  state = { search: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <form id="search" className="container mt-5 mb-3 input-group mb-3 w-50" onSubmit={this.onFormSubmit}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="search your favorite images from the space ...." 
          value={this.state.search}
          onChange={e => this.setState({search: e.target.value})}
        />
      </form>
    )
  }
}

export default Search
