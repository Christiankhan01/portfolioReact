import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';


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
                <Card>
                    {/* 
                    <CardImg width='100%' src={project.image} alt={project.name} />
                    */}
                    <CardBody >
                        <CardTitle>{project.name}</CardTitle>
                        <CardText>{project.description}</CardText>
                    </CardBody>


                </Card>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
    render() {
        const projectsMenu = this.props.projects.map((project) => {
            return (
                <div key={project.id}
                    className="col-12 col-sm-3 col-md m-1 d-flex">

                    <Card onClick={() => this.onProjectSelect(project)}> 
                        <CardImg width='100%' src={project.image} alt={project.name} />
                        <CardTitle>{project.name}</CardTitle>
                        <CardText>{project.category}</CardText>
                        <a href={project.link}>try me</a>

                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');

        return (
            <div className="body-color">
                <div className="container">
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