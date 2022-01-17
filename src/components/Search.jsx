import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className="container mt-3 mb-3 input-group mb-3">
        <input type="search" className="form-control" placeholder="search"  />
        <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
      </div>
    )
  }
}

export default Search
