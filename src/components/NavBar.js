import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" fixed="top" style={{ background: 'transparent' }}>
        <div className="container-fluid">
          <NavbarBrand href="/">MOVIEDB</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  Genre
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  Country
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>

                  Movies
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>APIS USED</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;