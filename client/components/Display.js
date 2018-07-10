import React, { Component } from 'react';
import profilePhoto from '../img/IMG_8232.jpg';

class Display extends Component {

  render() {
    return (
      <div id='display'>
        <img id='profile-photo' src={profilePhoto} alt="profile-photo"/>
        <div className='project' id='one'></div>
        <div className='project' id='two'></div>
        <div className='project' id='three'></div>
        <div className='project' id='four'></div>
      </div>
    );
  }
}

export default Display;