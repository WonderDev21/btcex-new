import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, } from 'react-bootstrap'
import ScrollspyNav from "react-scrollspy-nav";



function Header1() {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="navigation">
                                <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <ScrollspyNav
                                            scrollTargetIds={["home", "price", "portfolio", "testimonial", "app", "blog",]}
                                            offset={100}
                                            activeNavClass="active"
                                            scrollDuration="1000"
                                            headerBackground="true"
                                        >
                                            <Nav className="ml-auto">
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#home">Home</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#price">Price</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#portfolio">Portfolio </Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#testimonial">Testimonial</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#app">App</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#blog">Blog</Nav.Link></Nav.Item>
                                            </Nav>
                                        </ScrollspyNav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn">
                                        <Link to={'./dashboard'}>Dashboard</Link>
                                        <Link className="btn btn-primary ml-3" to={'/signin'}>Sign in</Link>
                                    </div>
                                </Navbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1;