import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { actions } from 'react-redux-form';




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


  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const HomePage = () => {
      return (
        <div className="container">
          <div className="row justify-content-center m-1 d-flex">
            <div className="col-12 col-sm col-md">
              <Home project={this.props.projects.projects.filter((project) => project.featured)[0]}
                project1={this.props.projects.projects.filter((project1) => project1.featured)[1]}
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
