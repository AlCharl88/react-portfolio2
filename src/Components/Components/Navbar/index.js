import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md" className="sticky-top">
        <NavbarBrand className="ml-3">Alain C. Tagne Kuate</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                Contact and Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Navigation;