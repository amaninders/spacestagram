import React from 'react'

export default function Navigation() {
  return (
    <nav className="navbar navbar-light bg-warning">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-rocket"></i> Spacestagram
        </a>
        <a className='btn btn-dark' href="https://github.com/amaninders/spacestagram" target={"_blank"}>Github</a>
      </div>
    </nav>
  )
}
