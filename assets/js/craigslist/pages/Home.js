import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Josef'
    };
    this.loopCategories = this.loopCategories.bind(this);
    this.loopTags = this.loopTags.bind(this);
  }

  loopCategories() {
    let testArray = [1, 2, 3, 4, 5, 6, 7];

    return testArray.map((item, i) => {
      return (
        <div className="categories" key={i}>
          <div className="title">Community</div>
          <div className="group-links">
            <a href="#" className="link">
              community
            </a>
            <a href="#" className="link">
              general
            </a>
            <a href="#" className="link">
              activities
            </a>
            <a href="#" className="link">
              groups
            </a>
            <a href="#" className="link">
              artists
            </a>
            <a href="#" className="link">
              local news
            </a>
            <a href="#" className="link">
              childcare
            </a>
            <a href="#" className="link">
              lost+found
            </a>
            <a href="#" className="link">
              classes
            </a>
            <a href="#" className="link">
              musicians
            </a>
            <a href="#" className="link">
              events
            </a>
            <a href="#" className="link">
              pets
            </a>
          </div>
        </div>
      );
    });
  }

  loopTags() {
    let testTags = ['a', 's', 'd', 'f', 'g'];

    return testTags.map((item, i) => (
      <div className="tag" key={i}>
        Apple macbook
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>
          Connecting People <br /> Everywhere :)
        </h1>
        <section className={'links'}>{this.loopCategories()}</section>
        <section className={'trending'}>
          <input type="text" name="search" className="search" />
          <div className="title">
            <i className="far fa-clock" />Trending Now
          </div>
          <div className="trending-tags">{this.loopTags()}</div>
        </section>
      </div>
    );
  }
}
