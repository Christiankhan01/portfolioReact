import React, { Component } from 'react';
import { Media } from 'reactstrap';

class ProjectsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 0,
                    name: 'TweetBot',
                    image: 'assets/images/twitterBot.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'Node RESTful CRUD GET operations Axios'
                },
                {
                    id: 1,
                    name: 'Java Chess',
                    image: 'assets/images/JavaChess.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Core Java and OOP principles demonstrating Encapsulation, Inheritance, Polymorphism and Multithreading over a client/server architecture.'
                },
                {
                    id: 2,
                    name: 'React Hooks Blog',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'Ristorante',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ],
        };
    }

    render() {
        const projectsMenu = this.state.projects.map((project) => {
            return (
                <div key={project.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={project.image} alt={project.name} />
                        </Media>
                        <Media body className="ml-5">
                        <div className="font-color">
                            <Media heading>{project.name}</Media>
                            <p>{project.description}</p>
                            </div>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="body-color">
            <div className="container">
                <div className="row">
                        <Media list>
                            {projectsMenu}
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsMenu;