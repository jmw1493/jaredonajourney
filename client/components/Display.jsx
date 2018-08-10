import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../build/06c7d196428cd53c6c407755852c38e9.jpg';

class Display extends Component {
  render() {
    return (
      <div id='display'>
        <img id='profile-photo' src={profilePhoto} alt="profile-photo"/>
        <Link 
          style={{ textDecoration: 'none', color: 'black' }} 
          id='one'  
          className={`about project ${this.props.tab === 'about' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
          to='/about'
        >About Me</Link>
        <Link 
          style={{ textDecoration: 'none', color: 'black' }} 
          id='two' 
          className={`fill-in-later project ${this.props.tab === 'fill-in-later' ? 'active' : ''}`} onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
          to='/fill-in-later'
        >fill in later</Link>
        <Link 
          style={{ textDecoration: 'none', color: 'black' }} 
          id='three' 
          className={`projects project ${this.props.tab === 'projects' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
          to='/projects'
        >Projects</Link>
        <Link 
          style={{ textDecoration: 'none', color: 'black' }} 
          id='four' 
          className={`coding-blogs project ${this.props.tab === 'coding-blogs' ? 'active' : ''}`} onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
          to='/coding-blogs'
        >Coding Blogs</Link>
        <Link 
          style={{ textDecoration: 'none', color: 'black' }} 
          id='five' 
          className={`travel-blogs project ${this.props.tab === 'travel-blogs' ? 'active' : ''}`} onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
          to='/travel-blogs'
        >Travel Blogs</Link>
        <Link 
          style={{ textDecoration: 'none', color: 'black' }} 
          id='six' 
          className={`contact project ${this.props.tab === 'contact' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
          to='/contact'
        >Contact</Link>
      </div>
    );
  }
}

export default Display;