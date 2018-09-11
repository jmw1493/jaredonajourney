import React, { Component } from 'react';

class FillInLater extends Component {

  componentDidMount() {
    if (this.props.HS) this.props.toggleHS();
  }

  render() {
    return (
      <div id='fill-in-later'>
        <p>FillInLater</p>
      </div>
    );
  }
}

export default FillInLater;