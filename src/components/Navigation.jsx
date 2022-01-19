import React from 'react'

export default function Navigation() {
  return (
    <nav className="navbar navbar-light sticky-top"  style={{'backgroundColor':'#B2CEEC'}}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-rocket"></i> Spacestagram
        </a>
        <a className='btn btn-dark' href="https://github.com/amaninders/spacestagram" target={"_blank"}>Github</a>
      </div>
    </nav>
  )
}
