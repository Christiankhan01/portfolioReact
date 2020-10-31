import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            isNavOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this);  
    }
    
    toggleNav() {
        this.set({
            isNavOpen: !this.state.isNavOpen
        }); 
    }

    render() {
        return (
            <>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/logos/computeringLogo.png"  alt="Christian Khan" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects">
                                        <span className="fa fa-list fa-lg"></span> Projects
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card fa-lg"></span> Contacts
                                </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
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