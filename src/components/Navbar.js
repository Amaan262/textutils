import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
      <nav 
        className={`navbar navbar-expand-lg navbar-${props.mode === "light" ? "light":"dark"} `} 
         style={{background: props.mode==="light"?"#e3f2fd":"linear-gradient(#2C3E50, #000000)" }}
        //  style={{background: props.mode==="light"?"#e3f2fd":"linear-gradient(to bottom right, #B1C4ED, #6F94CE)" }}
  
      >

        {/* {props.mode === "success" ? "dark":"white"}  */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/textutils">
            {props.title}
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
              {/* <li className="nav-item"> */}
                {/* <Link className="nav-link active" aria-current="page" to="/textutils/">
                  Home
                </Link> */}
              {/* </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.about}
                </a>
              </li> */}
            </ul>
            {/* <div className="form-check form-switch">
              <input
            
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>props.toggleMode("success")}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {"Enable Green Dark Mode"}
              </label>
            </div> */}

            <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>props.toggleMode("dark")}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {"Enable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "About text here",
};
