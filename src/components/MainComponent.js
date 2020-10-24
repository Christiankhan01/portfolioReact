import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ProjectsMenu from './components/ProjectsComponent';
import { PROJECTS } from './shared/projects';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: PROJECTS, 
      selectedProject: null
    };
  }
  onProjectSelect(project) {
    this.setState({ selectedProject: projectId });
}

  render() {
  return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Christian Khan</NavbarBrand>
          </div>
        </Navbar>
        <ProjectsMenu projects={this.state.projects} 
            onClick={(projectId) => this.onProjectSelect(projectId)}
            project={this.state.projects.filter((project) => project.id === this.state.selectedProject)[0]}/>
      </div >
    );
  }
}

export default Main;
