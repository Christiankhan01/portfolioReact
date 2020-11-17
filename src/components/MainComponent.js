import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Image from 'react-bootstrap/Image';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { actions } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';
import { Fade } from 'react-animation-components'



const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => { dispatch(fetchProjects()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});


class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const HomePage = () => {
      return (
        <div className="container ">
        <header className="jumbotron ">
        <div className="row row-header ">
          <div className="col-12 col-sm-6 col-md-6 ">
            <h1>FullStack Web Developer</h1>
            <h5>Welcome to my portfolio web application. This portoflio will demonstrate my skills in <font color="#007bff">Fullstack Web Development</font> using the MERN (Mongodb, ExpressJS, ReactJS and NodeJS) stack. Plese feel free to leave any feedback for me which can be found the in Contacts section of this application. Thank You and Happy Browsing!</h5>
          </div>
          <div className="align-self-center col-12 col-sm-6 col-md-6">
            <Image src={baseUrl + ("assets/logos/devLogo.png")} fluid alt="Developer Image" />
          </div>
        </div>
      </header>
      <div className="container">
        <h2 className="text-center text-color">My Skills</h2>
        <div className="row  ">
          <div className=" row-content col-12 col-md-4">
            <h5 className="text-center text-color"> FullStack Web Development</h5>
            <Fade in>
              <ul className="no-bullets text-color">
                <li>
                  <img src={baseUrl + ("./assets/logos/javascriptLogo.png")} alt="JavascriptLogo.png" />
                  <span>Javascript ES6</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/html5Logo.png")} alt="html5Logo" />
                  <span>HTML5</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/cssLogo.png")} alt="cssLogo" />
                  <span>CSS </span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/bootstrapLogo.png")} alt="bootstrapLogo" />
                  <span> Bootstrap</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/reactLogo.png")} alt="React " />
                  <span> React</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/expressLogo.png ")} alt="expressLogo" />
                  <span>Express</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/mongoLogo.png")} alt="NoSql MongoDB Logo" />
                  <span>NoSql MongoDB</span>
                </li>
              </ul>
            </Fade>
          </div>


          <div class="row-content col-12 col-md-4">
            <h5 class="text-center text-color"> Database Administration </h5>
            <Fade in>
              <ul class="no-bullets text-color">
                <li>
                  <img src={baseUrl + ("./assets/logos/javaLogo.png")} alt="JDBC Logo" />
                  <span>JDBC</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/SQLLogo.png")} alt="SQL Logo" />
                  <span>SQL</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/mySqlLogo.png")} alt="mySql Logo" />
                  <span>mySql</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/apacheLogo.png")} alt="Apache Logo" />
                  <span>Apache</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/mongooseLogo.png")} alt="Mongoose Logo" />
                  <span>Mongoose</span>
                </li>
                <li>
                  <img src={baseUrl + ("./assets/logos/MongoLogo.png")} alt="NoSql MongoDB Logo" />
                  <span>NoSql MongoDB</span>
                </li>
              </ul>
            </Fade>
          </div>
          <div class="row-content col-12 col-md-4 ">
            <h5 class="text-center text-color"> Application Development </h5>
            <Fade in enterOpacity={0.95}>
            <ul class="no-bullets text-color">
              <li>
                <img src={baseUrl + ("./assets/logos/reactLogo.png")} alt="React Logo" />
                <span>React Native</span>
              </li>
              <li>
                <img src={baseUrl + ("./assets/logos/swiftLogo.png ")} alt="Swift Logo" />
                <span>Swift</span>
              </li>
              <li>
                <img src={baseUrl + ("./assets/logos/javaLogo.png ")} alt="Java " />
                <span>Java</span>
              </li>
            </ul>
            </Fade>
          </div>
        </div>
      </div>
        <h2 class="text-center text-color">Some Featured Works</h2>
          <div className="row justify-content-center m-1 d-flex">
            <div className="col-12 col-sm col-md-3">
              <Home project={this.props.projects.projects.filter((project) => project.featured)[0]}
                projectsLoading={this.props.projects.isLoading}
                projectsErrMess={this.props.projects.errMess}
              />
            </div>
            <div className="col-12 col-sm col-md-3">
              <Home project={this.props.projects.projects.filter((project) => project.featured)[1]}
                projectsLoading={this.props.projects.isLoading}
                projectsErrMess={this.props.projects.errMess}
                 />

            </div>
          </div>
      </div>  

      );
    }
    return (
      <body className="body-color">
        <div>
          <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/projects" component={() => <ProjectsMenu projects={this.props.projects} />} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div >
      </body>
    );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
