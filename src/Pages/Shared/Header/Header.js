import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from '../../../Images/logo1.png';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div>
      <Navbar expand="lg ">
        <Container className="navbar">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="100%"
              height="80px"
              className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" as={Link} to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link className="text-white" as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link className="text-white" as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link className="text-white" as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link className="text-white" as={Link} to="/contact">
                  Contuct Us
                </Nav.Link>
              }
            </Nav>
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button className="common-btn" onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button className="common-btn">Login</button>
              </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
