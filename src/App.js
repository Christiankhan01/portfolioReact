import React, { Component } from 'react';
import './App.css';
import { PROJECTS } from './shared/projects';
import Main from './components/MainComponent';
class App extends Component {
  // constructor(props) {
  //   super(props); 
    
  //   this.state= {
  //     projects: PROJECTS
  //   }; 
  // }
  
  render() {
    return (
      <div>
        <Main />
      </div>

    );
  }
}

export default App;
