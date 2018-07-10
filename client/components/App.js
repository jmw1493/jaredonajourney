import React, { Component } from 'react';
import Header from './Header';
import MainScreen from './MainScreen';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Header />
        <MainScreen />
      </div>
    );
  }
}

export default App;