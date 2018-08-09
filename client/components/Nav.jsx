import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  // ${this.props.tab === 'about' ? 'active' : ''} 
  // ^ was a classname as well before

  render() {
    return (
      <nav>
        <NavLink 
          to='/about' 
          style={{ textDecoration: 'none', color: 'black' }} 
          activeStyle={{ color: 'white', background: 'blue' }}
          className={`tab ${this.props.HS ? '' : 'not-home-nav'}`} 
          onMouseOver={this.props.changeTab}
        >About Me</NavLink>

        <NavLink 
          to='/fill-in-later' 
          className={`tab ${this.props.HS ? '' : 'not-home-nav'}`} 
          onMouseOver={this.props.changeTab}
          style={{ textDecoration: 'none', color: 'black' }} 
          activeStyle={{ color: 'white', background: 'blue' }}
        >fill in later</NavLink>

        <NavLink 
          to='/projects' 
          className={`tab ${this.props.HS ? '' : 'not-home-nav'}`} 
          onMouseOver={this.props.changeTab}
          style={{ textDecoration: 'none', color: 'black' }} 
          activeStyle={{ color: 'white', background: 'blue' }}
        >Projects</NavLink>

        <NavLink 
          to='/coding-blogs' 
          className={`tab ${this.props.HS ? '' : 'not-home-nav'}`} 
          onMouseOver={this.props.changeTab}
          style={{ textDecoration: 'none', color: 'black' }} 
          activeStyle={{ color: 'white', background: 'blue' }}
        >Coding Blogs</NavLink>

        <NavLink 
          to='/travel-blogs' 
          className={`tab ${this.props.HS ? '' : 'not-home-nav'}`} 
          onMouseOver={this.props.changeTab}
          style={{ textDecoration: 'none', color: 'black' }} 
          activeStyle={{ color: 'white', background: 'blue' }}
        >Travel Blogs</NavLink>

        <NavLink 
          to='/contact' 
          className={`tab ${this.props.HS ? '' : 'not-home-nav'}`} 
          onMouseOver={this.props.changeTab}
          style={{ textDecoration: 'none', color: 'black' }} 
          activeStyle={{ color: 'white', background: 'blue' }}
        >Contact</NavLink>
      </nav>
    );
  }
}

export default Nav;