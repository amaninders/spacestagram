import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 mt-5 pb-5">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
      </form>
    )
  }
}

export default Search
