import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardDeck, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';



function About() {
    return (
        <div className="container-fluid">
            <div className="jumbotron ">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 offset-md-2 ">
                        <h1 className="text-center">About me</h1>
                        <p>Hi, my name is Christian Khan. I am a Computer Programmer and fullstack web developer in Toronto, who can build web applications from scratch. I enjoy creating functional applications for the web, desktop or mobile. Working with ReactJS
                        within the MERN framework has become one of my hobbies as i explore the <i>"code once deploy
                            everywhere"</i> approach to web development.
                        </p>
                    </div>
                </div>

                <div className="row offset-2">
                    <div className="col-12 col-sm-4 col-md-3">
                        <img src={baseUrl + ("assets/logos/MongoLogo.png")} alt="NoSql MongoDB Logo" />
                        <p>MongoDB</p>
                    </div>
                    <div className="  col-12 col-sm-3 col-md-3">
                        <img src={baseUrl + ("assets/logos/expressLogo.png ")} alt="expressLogo" />
                        <p>Express</p>
                    </div>
                    <div className="  col-12 col-sm-3 col-md-3">
                        <img src={baseUrl + ("assets/logos/reactLogo.png")} alt="React " />
                        <p> React</p>
                    </div>
                    <div className="  col-12 col-sm-3 col-md-3">
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
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-8 offset-md-2">
                    <CardDeck>
                        <Card>
                            <CardHeader className="bg-primary text-white">
                                <h2>My History</h2>
                            </CardHeader>
                            <CardBody>
                                <p>A graduate of the Information Technology Program at York University, earning a BA, I have taken the extra steps to specialize in Fullstack Web Development with React by earning a Coursera Specialization as i believe it to be the future of web development. Along with the traditional LAMP stack, i also know the MERN stack and hope to grow my skills further through continuous learning. </p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className="bg-primary text-white"><h2>Facts At a Glance</h2></CardHeader>
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
        </div >
    );
}

export default About;    