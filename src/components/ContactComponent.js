import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length; 
const maxLength = (len) => (val) => !(val) || (val.length <= len); 
const minLength = (len) => (val) => (val) && (val.length >= len); 
const isNumber = (val) => !isNaN(Number(val)); 
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 

class Contact extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values))
        alert("Current state is: " + JSON.stringify(values))

    }

    render() {
        return (
            <body className="body-color">
                <div className="container">
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
                    <div className="row">
                        <Breadcrumb className="text-color">
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 ">
                            <div className="text-color">
                                <h3>Contact</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col-12">
                                <div className="text-color">
                                    <h3>Location Information</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 offset-sm-1">
                                <div className="text-color">
                                    <h5>Map of our Location</h5>
                                </div>
                            </div>
                            <div className="col-12 col-sm-11 offset-sm-1">
                                {/*                    <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
        </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3 className="text-color">Send Your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row classname="form-group">
                                    <Label htmlFor="firstName" md={2} className="text-color">First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15) 
                                            }}
                                        />
                                        <Errors 
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            messages={{
                                                required: 'Required', 
                                                minLength: 'Must be greater than 2 characters', 
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                            />

                                    </Col>
                                </Row>
                                <Row classname="form-group">
                                    <Label htmlFor="lastName" md={2} className="text-color">Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15) 
                                            }}
                                        />
                                        <Errors 
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        messages={{
                                            required: 'Required', 
                                            minLength: 'Must be greater than 2 characters', 
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />

                                    </Col>
                                </Row>
                                <Row classname="form-group">
                                    <Label htmlFor="telNum" md={2} className="text-color">Contact Tel.</Label>
                                    <Col md={10}>
                                        <Control.text model=".telNum" id="telNum" name="telNum"
                                            placeholder="Tel. Number"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                            }}
                                        />
                                        <Errors 
                                        className="text-danger"
                                        model=".telNum"
                                        show="touched"
                                        messages={{
                                            required: 'Required', 
                                            minLength: 'Must be greater than 2 characters', 
                                            maxLength: 'Must be 15 characters or less', 
                                            isNumber: 'Must be a number'
                                        }}
                                        />

                                    </Col>
                                </Row>
                                <Row classname="form-group">
                                    <Label htmlFor="email" md={2} className="text-color" >Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                            />
                                            <Errors 
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required', 
                                                validEmail: 'Invalid Email Address'
                                            }}
                                            />
                                    </Col>
                                </Row>
                                <Row classname="form-group">
                                    <Col md={{ size: 6, offset: 2 }}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree"
                                                    className="form-checkbox-input"/> 
                                                    {' '}
                                                <strong className='text-color'>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row classname="form-group">
                                    <Label htmlFor="message" md={2} className="text-color" >Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" id="message" name="message"
                                            rows="12"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row classname="form-group">
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Contact;