import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <img className="img-fluid d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" src="https://script.viserlab.com/bloodlab/assets/images/logoIcon/logo.png" alt="logo"></img>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to='/' href="#" className="nav-link px-2 link-secondary">Home</NavLink></li>
            <li><NavLink  to='/about' className="nav-link px-2 link-dark">About</NavLink></li>
            <li><NavLink  to='/donors' className="nav-link px-2 link-dark">Donors</NavLink></li>
            <li><NavLink  to='' className="nav-link px-2 link-dark">Blog</NavLink></li>
            <li><NavLink  to='/contact' className="nav-link px-2 link-dark">Contact</NavLink></li>
          </ul>
          <div className="col-md-3 text-end">
            <NavLink  to='/apply/donor'><button type="button" className="btn btn-danger"> Apply as a Donor</button></NavLink>
          </div>
        </header>
        </div>
    );
};

export default Nav;