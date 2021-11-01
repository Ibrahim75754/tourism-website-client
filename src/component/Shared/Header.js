import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

import './Header.css';

const Header = () => {
    const { user, logOut } = UseAuth();
    const style = {
        color: "white"
    }
    return (
        <div className="header-bg">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>

                    <Navbar.Brand className="logo-name fs-3">TravelBD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        {
                            user.email ?
                                <Nav className="me-auto fw-bold">
                                    <NavLink activeStyle={style} className="nav-link" to="/home">Home</NavLink>
                                    <NavLink activeStyle={style} className="nav-link" to="/myOrders">My Orders</NavLink>
                                    <NavLink activeStyle={style} className="nav-link" to="/allOrders">All Orders</NavLink>
                                    <NavLink activeStyle={style} className="nav-link" to="/managePackage">Manage All Package</NavLink>
                                    <NavLink activeStyle={style} className="nav-link" to="/addNewPAckage">Add Package</NavLink>
                                </Nav>
                                :
                                <Nav className="me-auto fw-bold">
                                    <NavLink activeStyle={style} className="nav-link" to="/home">Home</NavLink>
                                </Nav>

                        }



                        <Nav>

                            {
                                user.email ?
                                    <div>
                                        <Navbar.Text className="me-2" >
                                            Hi, {user.displayName}
                                        </Navbar.Text>
                                        <Button>
                                            <NavLink onClick={logOut} className="text-decoration-none text-white" to="/home">LogOut</NavLink>
                                        </Button>
                                    </div> :
                                    <Button>
                                        <NavLink className="text-decoration-none text-white" to="/login">Login</NavLink>
                                    </Button>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;