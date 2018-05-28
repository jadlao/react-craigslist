import React, { Component } from 'react';
import Header from './includes/Header';
import Home from './pages/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe'
    };
  }
  render() {
    return (
      <div className="home">
        <Header />
        <Home />
      </div>
    );
  }
}
