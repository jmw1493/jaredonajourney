import React, { Component } from 'react';

class Projects extends Component {

  componentDidMount() {
    if (this.props.HS) this.props.toggleHS();
  }

  render() {
    return (
      <div id='projects'>
        <p>Projects</p>
      </div>
    );
  }
}

export default Projects;