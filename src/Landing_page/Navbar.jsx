import React, { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeContext } from "../Context/ContextAPI.jsx";

const Navbar = () => {
  
  const { userData, token, setToken}=useContext(storeContext);
  const navigate=useNavigate();
  const{email, accessToken, providerId, photoURL, displayName, metadata}=userData;

  const logout=async()=>{
    localStorage.removeItem('token');
    setToken(''); 
    toast.success('Logged out successfully!');
    navigate('/');
  }

 
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
             
                { token
                ? <button className="nav-link" onClick={logout}>
                Logout
              </button>
              :   <Link className="nav-link" to={"/signup"}>
              Signup
            </Link>
            }
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
            
              { token && <li className="nav-item dropdown" >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   <span>{providerId}</span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={'/dashboard'}>
                      {email}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={'/dashboard'}>
                    Dashboard
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      WatchList
                    </a>
                  </li>
                </ul>
              </li>
}
              
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
