import React, { Component } from 'react';

class Contact extends Component {

  componentDidMount() {
    if (this.props.HS) this.props.toggleHS();
  }

  render() {
    return (
      <div id='contact'>
        <p>Contact</p>
      </div>
    );
  }
}

export default Contact;