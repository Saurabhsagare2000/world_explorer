import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
class NavBar extends Component {

    constructor(props) {
        super(props)
        let flag = true;
        if (document.cookie === null || document.cookie === "null" || document.cookie == 0) {
            flag = false;
        }
        else {
            flag = true;
        }
        this.state = {
            isLoggedIn: flag
        }

    }

    render() {

        if (this.state.isLoggedIn) {
            return (
                <div>

                    <div className='wrapper'>
                        <Navbar bg="primary" variant="dark" style={{ paddingLeft: '3rem' }}>

                            <Navbar.Brand href="#home">World Explorer</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                                <Nav.Link href="/logout">Logout</Nav.Link>

                            </Nav>
                        </Navbar>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    .
                    <div className='wrapper'>
                        <Navbar bg="primary" variant="dark" style={{ paddingLeft: '3rem' }}>

                            <Navbar.Brand href="#home">World Explorer</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                                <NavDropdown title="Sign In" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/userlogin">User</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Sign Up" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/userregister">User</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>

                        </Navbar>
                    </div>
                </div>
            )
        }


    }









}
export default NavBar;