import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import { PROJECTS } from '../shared/projects';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom'; 
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS, 
      selectedProject: null
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home />
      ); 
    }
  return(
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/projects" component={() => <ProjectsMenu projects={this.state.projects} />} />
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div >
    );
  }
}

export default Main;
