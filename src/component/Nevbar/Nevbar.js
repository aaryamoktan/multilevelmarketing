import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nevbar.css"
import { NavLink} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function NavScrollExample() {
  return (
    <Navbar className='nev1'  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ABPA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='neb3 main_neb' ><NavLink to="/" style={{textDecoration:"none",color:"black"}}>Home</NavLink></Nav.Link>
            <Nav.Link className='neb3'><NavLink to="/About" style={{textDecoration:"none",color:"black"}}>Abouts-Us</NavLink></Nav.Link>
            <Nav.Link className='neb3'><NavLink to="/Contact" style={{textDecoration:"none",color:"black"}}>Contact-Us</NavLink></Nav.Link>
            <Nav.Link className='neb3'><NavLink to="/Progress" style={{textDecoration:"none",color:"black"}}>Progress</NavLink></Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;