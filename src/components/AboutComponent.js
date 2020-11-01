import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>My History</h2>
                    <p>Hi, my name is Christian Khan. I am a Computer Programmer and fullstack web developer in Toronto, who can build web applications from scratch. I enjoy creating functional applications for the web, desktop or mobile. Working with ReactJS within the MERN framework has become one of my hobbies as i explore the "code once deploy everywhere" approach to web development.</p>
                </div>
                <div className="col-12 col-md-6">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <div className="nowrap">
                                <dl className="row p-1">
                                    <dt className="col-6">Alma Matter</dt>
                                    <dd className="col-6">York University</dd>
                                    <dt className="col-6">Graduated</dt>
                                    <dd className="col-6">19 October 2019</dd>
                                    <dt className="col-6">Fullstack React Certified</dt>

                                    <dd className="col-6">5 September 2020</dd>
                                    <dt className="col-6">Programming Languages</dt>

                                    <dd className="col-6">3</dd>
                                </dl>
                                </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
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
            
        </div>
        
    );
}

export default About;    