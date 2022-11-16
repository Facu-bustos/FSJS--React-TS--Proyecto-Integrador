
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, } from 'react-router-dom';
function NavScrollExample() {
  return (
    <>
        <Navbar bg="dark" variant='dark' expand="bg">
      <Container fluid>
        <Navbar.Brand  href="/init">Home Shop Fly</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }} 
            navbarScroll>
            <Nav.Link  href="/init">Inicio</Nav.Link>
            <Nav.Link  href="/paquetes">Paquetes</Nav.Link>
            <Nav.Link  href="/Hoteles">Hoteles</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca tu viaje"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>

  );
}

export default NavScrollExample;