import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, } from 'react-bootstrap'
import ScrollspyNav from "react-scrollspy-nav";



function Header3() {

    return (
        <>
            <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="navigation">
                            <Navbar bg="light" expand="lg">
                                    <Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse>
                                        <ScrollspyNav
                                            scrollTargetIds={["home", "demo", "support"]}
                                            offset={100}
                                            activeNavClass="active"
                                            scrollDuration="1000"
                                            headerBackground="true"
                                        >
                                            <Nav className="ml-auto">
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#home">Home</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#demo">Demo</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link className="nav-Nav.link" href="#support">Support </Nav.Link></Nav.Item>
                                            </Nav>
                                        </ScrollspyNav>

                                    </Navbar.Collapse>

                                    <div className="signin-btn">
                                    <a href="https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses"
                                        class="btn btn-primary" target="_blank" rel="noopener noreferrer">Hire me</a>
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

export default Header3;