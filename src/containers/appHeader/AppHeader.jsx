import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import image from 'src/constants/image';

const AppHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex align-item-center justify-content-between w-100">
          <Navbar.Brand href="#">
            <img src={image.logo} style={{ maxHeight: 30 }} alt="" />
          </Navbar.Brand>
          <NavDropdown
            title={
              <>
                <div className="dropdown-user">
                  <img src={image.user} style={{ height: 24, width: 24 }} alt="" />
                  <span>super user</span>
                </div>
              </>
            }
            id="navbarScrollingDropdown"
            align="end"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
