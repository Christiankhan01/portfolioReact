import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
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
        <div className="container ">
          <header className="jumbotron ">
            <div className="row row-header ">
              <div className="col-12 col-sm-6 col-md-6 ">
                <h1>FullStack Web Developer</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="align-self-center col-12 col-sm-6 col-md-6">
                  <Image src="assets/logos/devLogo.png" fluid alt="Developer Image" />
                </div>
            </div>
          </header>
          <section>
          <div className="container">
              <h2 className="text-center text-color">My Skills</h2>
              <div className="row  ">
                  <div className=" row-content col-12 col-md-4">
                      <h5 className="text-center text-color"> FullStack Web Development</h5>
                      <ul className="no-bullets text-color">
                          <li>
                              <img src="./assets/logos/javascriptLogo.png" alt="JavascriptLogo.png" />
                              <span>React</span>
                          </li>
                          <li>
                              <img src="./assets/logos/html5Logo.png" alt="html5Logo" />
                              <span>HTML5</span>
                          </li>
                          <li>
                              <img src="./assets/logos/cssLogo.png" alt="cssLogo" />
                              <span>CSS </span>
                          </li>
                          <li>
                              <img src="./assets/logos/bootstrapLogo.png" alt="bootstrapLogo" />
                              <span> Bootstrap</span>
                          </li>
                          <li>
                              <img src="./assets/logos/reactLogo.png" alt="React " />
                              <span> React</span>
                          </li>
                          <li>
                              <img src="./assets/logos/expressLogo.png " alt="expressLogo" />
                              <span>Express</span>
                          </li>
                          <li>
                              <img src="./assets/logos/mongoLogo.png" alt="NoSql MongoDB Logo" />
                              <span>NoSql MongoDB</span>
                          </li>
                      </ul>
                  </div>
  
  
                  <div class="row-content col-12 col-md-4">
                      <h5 class="text-center text-color"> Database Administration </h5>
                      <ul class="no-bullets text-color">
                          <li>
                              <img src="./assets/logos/javaLogo.png" alt="JDBC Logo" />
                              <span>JDBC</span>
                          </li>
                          <li>
                              <img src="./assets/logos/SQLLogo.png" alt="SQL Logo" />
                              <span>SQL</span>
                          </li>
                          <li>
                              <img src="./assets/logos/mySqlLogo.png" alt="mySql Logo" />
                              <span>mySql</span>
                          </li>
                          <li>
                              <img src="./assets/logos/apacheLogo.png" alt="Apache Logo" />
                              <span>Apache</span>
                          </li>
                          <li>
                              <img src="./assets/logos/mongooseLogo.png" alt="Mongoose Logo" />
                              <span>Mongoose</span>
                          </li>
                          <li>
                              <img src="./assets/logos/MongoLogo.png" alt="NoSql MongoDB Logo" />
                              <span>NoSql MongoDB</span>
                          </li>
                      </ul>
                  </div>
                  <div class="row-content col-12 col-md-4 ">
                      <h5 class="text-center text-color"> Application Development </h5>
                      <ul class="no-bullets text-color">
                          <li>
                              <img src="./assets/logos/reactLogo.png" alt="React Logo" />
                              <span>React Native</span>
                          </li>
                          <li>
                              <img src="./assets/logos/swiftLogo.png " alt="Swift Logo" />
                              <span>Swift</span>
                          </li>
                          <li>
                              <img src="./assets/logos/javaLogo.png " alt="Java " />
                              <span>Java</span>
                          </li>
                      </ul>
  
                  </div>
              </div>
          </div>
      </section>
      <h2 class="text-center text-color">Today's Featured Works</h2>
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
    return (
      <body className="body-color">
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
      </body>
    );
  }
}

export default Main;
