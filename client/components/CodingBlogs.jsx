import React, { Component } from 'react';

class CodingBlogs extends Component {

  render() {
    if (this.props.HS) this.props.toggleHS();
    return (
      <div id='coding-blogs'>
        <p>CodingBlogs</p>
      </div>
    );
  }
}

export default CodingBlogs;