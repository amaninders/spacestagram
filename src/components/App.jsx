import React, { Component } from 'react'
import nasa from '../api/nasa.js';
import Grid from './Grid'
import Navigation from './Navigation'
import Search from './Search'
import Welcome from './Welcome'

export default class App extends Component {
  state = { 
    images: [],
    error: '' };

  onSearchSubmit = async term => {
    const response = await nasa.get('search', {
      params: { q: term }
    });
    
    this.setState({ images: response.data.collection.items })

    this.state.images.length ? this.setState({ error: '' }) : this.setState({ error: 'no images found' });
  };

  render() {
    return (
      <div className='container-fluid'>
        <Navigation />
        <Search onSubmit={this.onSearchSubmit} />
        { this.state.error ? <h1 className='text-center text-danger'>No Images Found</h1> : null }
        { this.state.images.length ? null :  <Welcome />}
        { this.state.images.length ? <Grid images={this.state.images}/> : null }
      </div>
    )
  }
}
