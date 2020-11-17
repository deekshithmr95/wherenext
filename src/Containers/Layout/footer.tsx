import { BottomNavigation } from '@material-ui/core';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <span>&copy; 2020.</span>
        <span className='ml-auto'>Powered by My Team</span>
      </React.Fragment>
    );
  }
}

export default Footer;
