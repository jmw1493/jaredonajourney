import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <nav>
        <div 
          className={`about-me tab ${this.props.tab === 'about-me' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
        >About Me</div>
        <div 
          className={`projects tab ${this.props.tab === 'projects' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
        >Projects</div>
        <div 
          className={`coding-blogs tab ${this.props.tab === 'coding-blogs' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
        >Coding Blogs</div>
        <div 
          className={`travel-blogs tab ${this.props.tab === 'travel-blogs' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
        >Travel Blogs</div>
        <div 
          className={`fill-in-later tab ${this.props.tab === 'fill-in-later' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
        >fill in later</div>
        <div 
          className={`contact tab ${this.props.tab === 'contact' ? 'active' : ''}`} 
          onMouseOver={this.props.changeTab}
        >Contact</div>
      </nav>
    );
  }
}

export default Nav;