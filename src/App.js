import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'; 
import ProjectsMenu from './components/ProjectsComponent';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Christian Khan</NavbarBrand>
        </div>
      </Navbar>
      <ProjectsMenu />
    </div>
  );
}

export default App;
