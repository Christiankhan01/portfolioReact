import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact(props) {
    return (
        <body class="body-color">
            <div className="container">
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
            </div>
        </body>
    );
}

export default Contact;