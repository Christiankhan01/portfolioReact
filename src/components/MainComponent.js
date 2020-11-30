import React, { Component } from 'react';
import ProjectsMenu from './ProjectsComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback, fetchProjects, loginUser, logoutUser, fetchFavorites, googleLogin, postFavorite, deleteFavorite } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { actions } from 'react-redux-form';
import ProjectDetail from './ProjectDetailComponent';
import Favorites from './FavoriteComponent';





const mapStateToProps = state => {
  return {
    projects: state.projects,
    favorites: state.favorites,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => { dispatch(fetchProjects()) },
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (projectId) => dispatch(postFavorite(projectId)),
  deleteFavorite: (projectId) => dispatch(deleteFavorite(projectId)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  googleLogin: () => dispatch(googleLogin())

});

class Main extends Component {


  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchFavorites();
  }
  
  componentWillUnmount() {
    this.props.logoutUser(); 
  }

  render() {
    const HomePage = () => {
      return (
        <Home project={this.props.projects.projects.filter((project) => project.featured)[0]}
          project1={this.props.projects.projects.filter((project1) => project1.featured)[1]}
          projectsLoading={this.props.projects.isLoading}
          projectsErrMess={this.props.projects.errMess}
          
        />
      );
    }


    const ProjectWithId = ({ match }) => {
      return (
        (this.props.auth.isAuthenticated && this.props.favorites.favorites)
          ?
          <ProjectDetail project={this.props.projects.projects.filter((project) => project._id === match.params.projectId)[0]}
            isLoading={this.props.projects.isLoading}
            errMess={this.props.projects.errMess}
            favorite={this.props.favorites.favorites.projects.some((project) => project === match.params.projectId)}
            postFavorite={this.props.postFavorite}
          />
          :
          <ProjectDetail project={this.props.projects.projects.filter((project) => project._id === match.params.projectId)[0]}
            isLoading={this.props.projects.isLoading}
            errMess={this.props.projects.errMess}
            favorite={false}
            postFavorite={this.props.postFavorite}
          />
      );
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/home',
            state: { from: props.location }
          }} />
      )} />
    );
    return (
      <div className="body-color">
        <div>
          <Header auth={this.props.auth}
            loginUser={this.props.loginUser}
            logoutUser={this.props.logoutUser}
            googleLogin={this.props.googleLogin} />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={() => <ProjectsMenu projects={this.props.projects} />} />
                <Route path="/menu/:projectId" component={ProjectWithId} />
                <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} projects={this.props.projects} deleteFavorite={this.props.deleteFavorite} />} />
                <Route exact path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div >
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
