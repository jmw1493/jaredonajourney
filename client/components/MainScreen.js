import React, { Component } from 'react';
import Main from './Main';
import Nav from './Nav';

class MainScreen extends Component {

  render() {
    return (
      <div id='main-screen'>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default MainScreen;