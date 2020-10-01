import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
} from "mdbreact";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="app">
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <img
            src={require("../Assets/warflix.png")}
            style={{ height: "50px", width: "50px" }}
          />
          <strong className="white-text">Warflix</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/upcoming">Upcoming</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Now Playing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/detail">Detail Movie</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/detail">Detail Movie</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Header;
