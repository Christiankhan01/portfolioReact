import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Christian</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron> 
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Christian Khan</h1>
                                <p>These are some of my projects</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
            
            )
        }
    }
    export default Header; 