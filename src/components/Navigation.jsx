import React from 'react'

export default function Navigation() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fas fa-rocket"></i> Spacestagram
        </a>
        <button className='btn btn-outline-success'>Likes</button>
      </div>
    </nav>
  )
}
