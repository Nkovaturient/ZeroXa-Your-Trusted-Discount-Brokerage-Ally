import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg  border-bottom" style={{backgroundColor: '#fff'}}>
        <div className="container-fluid py-3">
          <Link className="navbar-brand ms-auto" to={'/'}>
            <img src="media/images/logo.svg" className="offset-4"  alt="ZeroXa" style={{width: '30%'}} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{fontWeight: '600'}} className="navbar-nav me-auto ms-auto mb-2 mx-4 mb-lg-0">
              <li className="nav-item mx-4">
                <Link className="nav-link" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link" to={"/support"} >
                  Support
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
