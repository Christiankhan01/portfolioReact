import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';



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
                    <Card className="text-center">
                        <CardBody >
                            <img src={project.image2} alt="" />
                            <img src={project.image3} alt=""/>
                            <img src={project.image4} alt=""/>
                            <img src={project.image5} alt=""/>
                            <img src={project.image6} alt=""/>
                            <CardTitle>{project.name}</CardTitle>
                            <CardText>{project.description}</CardText>
                            <CardText>{project.label}</CardText>
                            <a href={project.link}>{project.word}</a>
                        </CardBody>
                    </Card>
                     

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
        const projectsMenu = this.props.projects.map((project) => {
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