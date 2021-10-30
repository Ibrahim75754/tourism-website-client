import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark footer-bg sticky-top">
            <div className="container">
                <Link className="navbar-brand text-warning fs-2" to="/">tripsDays</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Navbar text with an inline element
                        {
                            /*  user.email ?
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
                                 </Button> */
                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;