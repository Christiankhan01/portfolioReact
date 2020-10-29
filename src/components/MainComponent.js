import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ProjectsMenu from './ProjectsComponent';
import { PROJECTS } from '../shared/projects';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS, 
      selectedProject: null
    };
  }

  render() {
  return(
      <div>
        <Header />
        <ProjectsMenu projects={this.state.projects} 
        onClick={(projectId) => this.onProjectSelect(projectId)}
        project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/>
        
        <Footer />
      </div >
    );
  }
}

export default Main;
