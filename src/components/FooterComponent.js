import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container text-color">
                <div className="row  justify-content-center">
                    <div className=" col-4 offset-1 col-sm-2 col-md-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a class= "text-color" href="index.html" alt="">Home</a></li>
                            <li><a class= "text-color" href="aboutus.html">About</a></li>
                            <li><a class= "text-color" href="projects.html">Projects</a></li>
                            <li><a class= "text-color" href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-4 col-md align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;