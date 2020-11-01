import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
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
      return (
        <div className="container">
          <div className="row justify-content-center m-1 d-flex">
          <div className="col-12 col-sm col-md-3">
            <Home project={this.state.projects.filter((project) => project.featured)[0]} />
            </div>
            <div className="col-12 col-sm col-md-3">
              <Home project={this.state.projects.filter((project) => project.featured)[1]} />

            </div>
          </div>
        </div>
      );
    }
 {/*   const ProjectWithId = ({match}) => {
      return (
        <ProjectsMenu project={this.state.projects.filter((project) => project.id === parseInt(match.params.projectId,10))[0]} />
      ); 
      
    }*/}
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/projects" component={() => <ProjectsMenu projects={this.state.projects} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div >
    );
  }
}

export default Main;
