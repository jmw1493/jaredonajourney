import React, { Component } from 'react';
import profilePhoto from '../img/IMG_8232.jpg';

class Display extends Component {
// about me, projects, blogs, travel
  render() {
    return (
      <div id='display'>
        <img id='profile-photo' src={profilePhoto} alt="profile-photo"/>
        <div 
          id='one'  
          className={`about-me project ${this.props.tab === 'about-me' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
        >About Me</div>
        <div 
          id='two' 
          className={`projects project ${this.props.tab === 'projects' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
        >Projects</div>
        <div 
          id='three' 
          className={`coding-blogs project ${this.props.tab === 'coding-blogs' ? 'active' : ''}`} onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
        >Coding Blogs</div>
        <div 
          id='four' 
          className={`travel-blogs project ${this.props.tab === 'travel-blogs' ? 'active' : ''}`} onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
        >Travel Blogs</div>
        <div 
          id='five' 
          className={`fill-in-later project ${this.props.tab === 'fill-in-later' ? 'active' : ''}`} onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
        >fill in later</div>
        <div 
          id='six' 
          className={`contact project ${this.props.tab === 'contact' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
          onClick={this.props.toggleHS}
        >Contact</div>
      </div>
    );
  }
}

export default Display;