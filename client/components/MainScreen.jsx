import React, { Component } from 'react';
import Main from './Main.jsx';
import Nav from './Nav.jsx';
import Display from './Display.jsx'

class MainScreen extends Component {

  render() {
    return (
      <div id='main-screen'>
        {this.props.HS ? 
          <div/> : 
          <Nav tab={this.props.tab} changeTab={this.props.changeTab} HS={this.props.HS}/>}
        <Main tab={this.props.tab} changeTab={this.props.changeTab} 
        HS={this.props.HS} 
        toggleHS={this.props.toggleHS}
        // page={this.props.page}
        // changePage={this.props.changePage}
        />
      </div>
    );
  }
}

export default MainScreen;