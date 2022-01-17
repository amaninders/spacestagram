import React, { Component } from 'react'
import Grid from './Grid'
import Navigation from './Navigation'
import Search from './Search'
import Welcome from './Welcome'

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Navigation />
        <Search />
        <Welcome />
        <Grid />
      </div>
    )
  }
}
