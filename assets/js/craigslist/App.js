import React, { Component } from 'react';
import Header from './includes/Header';

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
      </div>
    );
  }
}
