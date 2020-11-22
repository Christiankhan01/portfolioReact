
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, Jumbotron, BreadcrumbItem, CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


class ProjectsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
        }
        console.log('Menu Componet constructor called')
    }
    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')
    }
    onProjectSelect(project) {
        this.setState({ selectedProject: project });
    }



    renderProject(project) {
        if (project != null) {
            return (

                <div className=" row-content col-md-4">

                    <div className="text-center">

                        <Card>
                            <CardBody >
                                <img src={baseUrl + project.image2} alt="" />
                                <img src={baseUrl + project.image3} alt="" />
                                <img src={baseUrl + project.image4} alt="" />
                                <img src={baseUrl + project.image5} alt="" />
                                <img src={baseUrl + project.image6} alt="" />
                                <CardTitle>{project.name}</CardTitle>
                                <CardText>{project.language}</CardText>
                                <CardText>{project.description}</CardText>
                                <CardText>{project.label}</CardText>
                                <a href={project.link}>{project.word}</a>
                            </CardBody>
                        </Card>

                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
    render() {
        const projectsMenu = this.props.projects.projects.map((project) => {
            return (
                <div key={project.id} className="justify-content-center col-12 col-sm-12 col-md-3 d-flex  ">
                    <div className="zoom">
                        <summary>
                            <CardDeck>
                                <Card className="text-center " onClick={() => this.onProjectSelect(project)}>
                                    <FadeTransform in
                                        transformProps={{
                                            exitTransform: 'scale(0.5) translateY(-50%)'
                                        }}>
                                        <CardImg width='100%' src={baseUrl + project.image} alt={project.name} />
                                        <CardTitle className="bg-primary text-white">{project.name}</CardTitle>
                                        <CardText>{project.category}</CardText>
                                        <a href={project.link}>{project.word}</a>
                                    </FadeTransform>
                                </Card>
                            </CardDeck>
                        </summary>
                    </div>


                </div>
            );
        });
        if (this.props.projects.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.projects.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container-fluid" >
                    <Jumbotron>
                        <div className="row row-header">
                            <div className="text-center col-md-8 offset-2">
                                <h1>Projects</h1>
                                <p className="font-custom">Welcome to the projects sections of my portfolio. Weather small widgets with less than 100 lines of code, here you will find a variety of applications.  </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm col-md  ">
                                <img className="center-block img-fluid" src={baseUrl + ("assets/logos/projects.png")}   alt="Developer" />
                            </div>
                        </div>
                    </Jumbotron>Projects
                    <div className="body-color">
                        <div className="row">
                            <Breadcrumb className="text-color">
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Projects</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12 text-white">
                                <h3>Projects</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row ">
                            {projectsMenu}
                        </div>
                        <div className="row">
                            {this.renderProject(this.state.selectedProject)}
                        </div>
                    </div>
                </div>

            );
    }
}

export default ProjectsMenu;
//
