import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./navBar.css"

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navContainer" id="nav" style={{ fontFamily: "Inter, sans-serif", fontSize: "1.2rem" }}>
      <Container className="d-flex">
       
          <Navbar.Brand href="#nav">
            <img
              alt=""
              src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1745244273/Tomi%20Waj%20Gay/logo_id9vjw.png"
              width="100"
              height="100"
              className="d-inline-block align-top imgNav"
            />
          </Navbar.Brand>
       

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto nav-links d-flex justify-content-center align-items-center">
              <Nav.Link href="#inicio" className="text-light navLink">Inicio</Nav.Link>
              <Nav.Link href="#misionVision" className="text-light navLink">Mision y Vision</Nav.Link>
              <Nav.Link href="#podio" className="text-light navLink">PODIO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
