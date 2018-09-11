import React, { Component } from 'react';

class About extends Component {

  componentDidMount() {
    if (this.props.HS) this.props.toggleHS();
  }

  render() {
    return (
      <div id='about'>
        <p>About</p>
      </div>
    );
  }
}

export default About;