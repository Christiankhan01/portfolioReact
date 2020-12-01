import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
    return (
        <div className="footer">
            <div className="container text-color">
                <div className="row  justify-content-center">
                    <div className=" col-4 offset-1 col-sm-2 col-md-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className= "text-color"> Home</Link></li>
                            <li><Link to="/about" className= "text-color">About</Link></li>
                            <li><Link to="/projects" className= "text-color">Projects</Link></li>
                            <li><Link to="/contact" className= "text-color">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-4 col-md align-self-center">
                        <div className="text-center">

                            <a className="btn btn-social-icon btn-github" href="https://github.com/christiankhan01"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon" href="mailto: christiankhan@hotmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p className="font-f" >Served up on Google Firebase, Stored on Cloud Firestore </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;