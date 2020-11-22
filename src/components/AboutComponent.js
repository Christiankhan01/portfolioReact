import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardDeck, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { FaUserGraduate, FaMedal, FaHistory, FaCheckSquare } from 'react-icons/fa';







function About() {
    return (
        <div className="container-fluid">
            <div className="jumbotron ">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 offset-md-2 ">
                        <h1 className="text-center">About me</h1>
                        <p className="font-custom">Hi, my name is Christian Khan. I am a Computer Programmer and fullstack web developer in Toronto, who can build web applications from scratch. I enjoy creating functional applications for the web, desktop or mobile. Working with ReactJS
                        within the MERN framework has become one of my hobbies as i explore the <i>"code once deploy
                            everywhere"</i> approach to web development.
                        </p>
                    </div>
                </div>

                <div className="row offset-4 offset-md-2">

                        <div className="col-sm-4  col-md-3">
                            <img src={baseUrl + ("assets/logos/MongoLogo.png")} alt="NoSql MongoDB Logo" />
                            <p>MongoDB</p>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <img src={baseUrl + ("assets/logos/expressLogo.png ")} alt="expressLogo" />
                            <p>Express</p>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <img src={baseUrl + ("assets/logos/reactLogo.png")} alt="React " />
                            <p> React</p>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <img src={baseUrl + ("assets/logos/nodeLogo.png")} alt="NoSql MongoDB Logo" />
                            <p>NodeJS</p>
                        </div>

                </div>
            </div>

            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Me</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3 className="text-color text-center">About Me</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-8 offset-md-2">
                    <CardDeck>
                        <Card>
                            <CardHeader className="bg-primary text-white">
                                <h2>My History <FaHistory /></h2>
                            </CardHeader>
                            <CardBody>
                                <p>A graduate of the Information Technology Program at York University, earning a BA, I have taken the extra steps to specialize in Fullstack Web Development with React by earning a Coursera Specialization as i believe it to be the future of web development. Along with the traditional LAMP stack, i also know the MERN stack and hope to grow my skills further through continuous learning. </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="bg-primary text-white"><h2>Facts At a Glance<FaCheckSquare /></h2></CardHeader>
                            <CardBody>
                                <div className="">
                                    <dl className="row">
                                        <dt className="col-6">Alma Matter</dt>
                                        <dd className="col-6">York University</dd>
                                        <dt className="col-6">Graduated</dt>
                                        <dd className="col-6">19 October 2019</dd>
                                        <dt className="col-6">Degree Major</dt>
                                        <dd className="col-6">Information Technology</dd>
                                        <dt className="col-6">Fullstack React Certified</dt>
                                        <dd className="col-6">5 September 2020</dd>
                                        <dt className="col-6">Programming Languages</dt>
                                        <dd className="col-6">3</dd>
                                    </dl>
                                </div>
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <hr />
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0"><i>Everybody...should learn how to program a computer, should learn a computer language, because it teaches you  how to think.</i></p>
                                <footer className="blockquote-footer">Steve Jobs,
                                <cite title="Source Title">The Lost Interview,
                                    Robert Cringely,PBS, 1995</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-sm-12 col-md-8 offset-md-2">
                    <CardDeck>
                        <Card>
                            <CardHeader className="bg-primary text-white">
                                <h3>Education Courses Include<FaUserGraduate /> </h3>
                            </CardHeader>
                            <ListGroup >
                                <ListGroupItem>Web Technologies</ListGroupItem>
                                <ListGroupItem>Systems Architecture</ListGroupItem>
                                <ListGroupItem>System Administration</ListGroupItem>
                                <ListGroupItem>Designing User Interfaces</ListGroupItem>
                                <ListGroupItem>Introduction to Sets and Logic</ListGroupItem>
                                <ListGroupItem>Object-Oriented Programming</ListGroupItem>
                                <ListGroupItem>Introduction to Applied Statistics</ListGroupItem>
                                <ListGroupItem>Introduction to Analytical Programming</ListGroupItem>
                                <ListGroupItem>Using and Designing Database Systems</ListGroupItem>
                                <ListGroupItem>Applied Data Communications and Networks</ListGroupItem>
                            </ListGroup>
                        </Card>
                        <Card>
                            <CardHeader className="bg-primary text-white"><h3>Accomplishments<FaMedal /></h3></CardHeader>
                            <ListGroup>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>Front-End Web UI Frameworks and Tools: Bootstrap 4</ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>Front-End Web Development with React</ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>Multiplatform Mobile App Development with React Native</ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>Server-side Development with NodeJS, Express and MongoDB</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </CardDeck>
                </div>
            </div>

        </div>

    );
}

export default About;    