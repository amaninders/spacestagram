import React from 'react'

export default function Navigation() {
  return (
    <nav className="navbar navbar-light bg-warning">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fas fa-rocket"></i> Spacestagram
        </a>
        <button className='btn btn-dark'>Likes</button>
      </div>
    </nav>
  )
}
