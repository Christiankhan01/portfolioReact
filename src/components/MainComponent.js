import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from 'react-router-dom'; 
import { PROJECTS } from '../shared/projects';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS,

    };
  }

  render() {
    const HomePage = () => {
      return(

        <Home project={this.state.projects.filter((project) => project.featured)[0]} />

      ); 
    }
  return(
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/projects" component={() => <ProjectsMenu projects={this.state.projects} />} />
          <Route exact path="/contact" component={Contact} />
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div >
    );
  }
}

export default Main;
