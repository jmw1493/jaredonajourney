import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import About from './About.jsx';
import FillInLater from './FillInLater.jsx';
import Projects from './Projects.jsx';
import CodingBlogs from './CodingBlogs.jsx';
import TravelBlogs from './TravelBlogs.jsx';
import Contact from './Contact.jsx';
import Display from './Display.jsx';

class Main extends Component {

  render() {
    //render a router
    //default route should be <Display/>
    return (
      // <main className={!this.props.page ? 'home' : 'not-home'}> 
      <main className={this.props.HS ? 'home' : 'not-home'}> 
        <Switch>
          <Route exact path="/about" render={() => (<About/>)}/>
          <Route exact path="/fill-in-later" render={() => (<FillInLater/>)}/>
          <Route exact path="/projects" render={() => (<Projects/>)}/>
          <Route exact path="/coding-blogs" render={() => (<CodingBlogs/>)}/>
          <Route exact path="/travel-blogs" render={() => (<TravelBlogs/>)}/>
          <Route exact path="/contact" render={() => (<Contact/>)}/>
          <Route render={() => (
            <Display 
              tab={this.props.tab} 
              changeTab={this.props.changeTab} 
              toggleHS={this.props.toggleHS}
              // changePage={this.props.changePage}
            />
          )}/>
        
        {/*           
          {this.props.HS 
          ? 
            <Display tab={this.props.tab} changeTab={this.props.changeTab} 
            toggleHS={this.props.toggleHS}
              // changePage={this.props.changePage}
            /> 
          : 
            <div/>} */}
        </Switch>
      </main>
    );
  }
}

export default Main;