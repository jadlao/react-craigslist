import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe'
    };
  }
  render() {
    return (
      <header>
        <div className={'left-menu'}>
          <div className={'logo'}>Craigslist</div>
          <div className={'city'}>
            Sydney <i className={`fas fa-chevron-down`} />
          </div>
        </div>
        <div className={'right-menu'}>
          <div className={'user-img'}>
            <img
              src={`http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png`}
            />
          </div>
          <div className={'dropdown'}>
            My Account <i className={`fas fa-chevron-down`} />
          </div>
          <div className={'post-btn'}>Post to Classifieds</div>
        </div>
      </header>
    );
  }
}
