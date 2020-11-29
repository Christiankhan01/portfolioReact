import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Jumbotron } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import Map from './MapComponent';
import { withGoogleMap, withScriptjs } from 'react-google-maps';


const WrappedMap = withScriptjs(withGoogleMap(Map))
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
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }
    render() {
        return (
            <div className="container-fluid body-color">
                <Jumbotron>
                    <div className="row">
                        <div className="text-center col-12 col-sm-12 col-md-12">
                            <h1 className="text-center">Contact Me</h1>
                            <p className="font-s">Have great idea for an app or website? Let's put some code to it and make it a reality!</p>
                            <div className="row">
                                <div className=" col-12 col-sm-6 col-md-6">
                                    <img src={baseUrl + ("assets/logos/idea.png")} alt="" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6">
                                    <img src={baseUrl + ("assets/logos/Responsive.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
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
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="text-color">
                            <h3>Location Information</h3>
                            <hr />
                            <hr />
                        </div>
                    </div>
                    <div className=" col-md-2 offset-2 ">
                        <div className="text-color text-center">
                            <h5>Map of my Location</h5>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 offset-sm-2 offset-md-4">
                        {/*<Grid item sm={12} style={{ position: 'relative', height: '50vh' }}/>*/}
                        <div style={{ width: '42%', height: '24vh' }}>
                            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `600px`, width: `100%` }} />}
                                mapElement={<div style={{ height: `50%` }} />}
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row row-content">
                    <div className="col-md-6 offset-3">
                        <h3 className="text-center text-color">Send Your Feedback</h3>
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2} className="text-color">First Name</Label>
                                <Col md={7}>
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
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2} className="text-color">Last Name</Label>
                                <Col md={7}>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
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
                            <Row className="form-group">
                                <Label htmlFor="telNum" md={2} className="text-color">Contact Tel.</Label>
                                <Col md={7}>
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
                            <Row className="form-group">
                                <Label htmlFor="email" md={2} className="text-color" >Email</Label>
                                <Col md={7}>
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
                            <Row className="form-group">
                                <Col md={{ size: 4, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-checkbox-input" />
                                            {' '}
                                            <strong className='text-color'>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 2, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2} className="text-color" >Your Feedback</Label>
                                <Col md={7}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                        </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
