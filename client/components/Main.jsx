import React, { Component } from 'react';
import Display from './Display.jsx';

class Main extends Component {

  render() {
    //render a router
    //default route should be <Display/>
    return (
      // <main className={!this.props.page ? 'home' : 'not-home'}> 
      <main className={this.props.HS ? 'home' : 'not-home'}> 

        {this.props.HS 
        ? 
          <Display tab={this.props.tab} changeTab={this.props.changeTab} 
          toggleHS={this.props.toggleHS}
            // changePage={this.props.changePage}
          /> 
        : 
          <div/>}
      </main>
    );
  }
}

export default Main;