import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import ProjectsMenu from './components/ProjectsComponent';
import { PROJECTS } from './shared/projects';

class App extends Component {
  constructor(props) {
    super(props); 
    
    this.state= {
      projects: PROJECTS
    }; 
  }
  
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Christian Khan</NavbarBrand>
          </div>
        </Navbar>
        <ProjectsMenu projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
