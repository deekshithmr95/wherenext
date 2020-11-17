import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Navbar bg='dark' variant='dark' fixed="top">
          <Navbar.Brand href='#home'>Logo Comes here</Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
