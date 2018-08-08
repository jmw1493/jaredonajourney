import React, { Component } from 'react';
import Main from './Main';
import Nav from './Nav';
import Display from './Display'

class MainScreen extends Component {

  render() {
    return (
      <div id='main-screen'>
        {this.props.HS ? <div/> : <Nav tab={this.props.tab} changeTab={this.props.changeTab}/>}
        <Main tab={this.props.tab} changeTab={this.props.changeTab} HS={this.props.HS} toggleHS={this.props.toggleHS}/>
      </div>
    );
  }
}

export default MainScreen;