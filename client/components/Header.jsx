import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import planeImage from '../img/1a2.svg';

class Header extends Component {
  constructor() {
    super()
    this.headerToggleHS = this.headerToggleHS.bind(this);
  }

  headerToggleHS() {
    if (!this.props.HS) this.props.toggleHS();
  }

  render() {
    return (
      <header>
        {/* <p>JaredOnAJourney</p> */}
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }} onClick={this.headerToggleHS}>JaredOnAJourney</Link>
      </header>
    );
  }
}

export default Header;