import React, { Component } from 'react';
import Header from './Header.jsx';
import MainScreen from './MainScreen.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tab: '',
      // page: '',
      homeScreen: true
    }
    this.changeTab = this.changeTab.bind(this)
    // this.changePage = this.changePage.bind(this)
    this.toggleHomeScreen = this.toggleHomeScreen.bind(this)
  }

  changeTab(e) {
    this.setState({
      tab: e.target.className.slice(0, e.target.className.indexOf(' '))
    })
  }

  toggleHomeScreen() {
    console.log('homescreen ' + this.state.homeScreen)
    console.log('new homescreen state ' + !this.state.homeScreen)
    this.setState({
      homeScreen: !this.state.homeScreen
    })
  }

  render() {
    return (
      <div className='app'>
        <div id='set-image-bg'>
          <Header HS={this.state.homeScreen} toggleHS={this.toggleHomeScreen}/>
          <MainScreen 
            tab={this.state.tab} 
            changeTab={this.changeTab} 
            HS={this.state.homeScreen}
            toggleHS={this.toggleHomeScreen}
          />
        </div>
      </div>
    );
  }
}

export default App;