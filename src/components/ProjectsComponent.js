
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


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

                <div className=" row-content col-12 col-md-12">
                    <div className="text-center">
                        <Card>

                            <CardBody >
                                <img src={project.image2} alt="" />
                                <img src={project.image3} alt="" />
                                <img src={project.image4} alt="" />
                                <img src={project.image5} alt="" />
                                <img src={project.image6} alt="" />
                                <CardTitle>{project.name}</CardTitle>
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
                <div key={project.id}
                    className="col-12 col-sm col-md m-1 d-flex">
                    <Card className="text-center" onClick={() => this.onProjectSelect(project)}>

                        <CardImg width='100%' src={project.image} alt={project.name} />
                        <CardTitle>{project.name}</CardTitle>
                        <CardText>{project.category}</CardText>
                        <a href={project.link}>{project.word}</a>

                    </Card>
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

                <div className="container" >
                    <header class="jumbotron">
                        <div class="row row-header">
                            <div class="col-12 col-sm-12 col-md-12">
                                <h1 class="text-center">About me</h1>
                                <p>Hi, my name is Christian Khan. I am a Computer Programmer and fullstack web developer in Toronto, who can build web applications from scratch. I enjoy creating functional applications for the web, desktop or mobile. Working with ReactJS
                        within the MERN framework has become one of my hobbies as i explore the <i>"code once deploy
                            everywhere"</i> approach to web development.
                    </p>
                            </div>
                        </div>
                        <div class="row offset-1">
                            <div class="col-12 col-sm-3 col-md-3">
                                <img src="assets/logos/MongoLogo.png" alt="NoSql MongoDB Logo" />
                                <p>MongoDB</p>
                            </div>
                            <div class="  col-12 col-sm-3 col-md-3">
                                <img src="assets/logos/expressLogo.png " alt="expressLogo" />
                                <p>Express</p>
                            </div>
                            <div class="  col-12 col-sm-3 col-md-3">
                                <img src="assets/logos/reactLogo.png" alt="React " />
                                <p> React</p>
                            </div>
                            <div class="  col-12 col-sm-3 col-md-3">
                                <img src="assets/logos/nodeLogo.png" alt="NoSql MongoDB Logo" />
                                <p>NodeJS</p>
                            </div>
                        </div>
                    </header>
                    <div className="body-color">
                        <div className="row">
                            <Breadcrumb className="text-color">
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Projects</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
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
