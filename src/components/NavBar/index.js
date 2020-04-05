import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

import { Gradient } from "react-gradient";

import SearchBar from "./SearchBar";
import "./style.css";

const gradients = [
  ["#bd19d6", "#ea7d10"],
  ["#ff2121", "#25c668"]
];

const NavBar = () => {
  const [menuOpen, toggleMenu] = useState(false);
  const location = useLocation();

  return (
    <div>
      <MDBNavbar color="black" dark expand="md" className="z-depth-0">
        <MDBNavbarBrand>
          <Gradient
            gradients={gradients} // required
            property="text"
            duration={3000}
            angle="45deg"
          >
            <strong className="white-text">Giphier</strong>
          </Gradient>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => toggleMenu(!menuOpen)} />
        <MDBCollapse id="navbarCollapse3" isOpen={menuOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              {/* not using slash here so that random goes on top of current path */}
              <MDBNavLink to={`/${location.pathname.split("/")[1]}/random`}>
                Random
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/stickers">Stickers</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/gifs">Gifs</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <SearchBar />
    </div>
  );
};
export default NavBar;
