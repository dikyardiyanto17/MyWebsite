import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/Navbar.css'
import '../App.css';
import { Link } from 'react-router-dom';
import MyLogo from '../assets/MyLogo.png'


function NavScrollExample() {
  return (
    <Navbar style={{position: 'fixed', width: '100vw', backgroundColor: '#03001C', color: '#5B8FB9', height: '10vh', display: 'block'}}>
      <Container fluid>
        <Navbar.Brand style={{color: '#5B8FB9'}}><img src={MyLogo} style={{width: '50px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="" style={{color: '#5B8FB9', margin: 'auto', textDecoration: 'none'}}>Home</Link>
            <Link style={{color: '#5B8FB9', margin: 'auto', marginLeft: '15px', textDecoration: 'none'}} to='staytuned' >My Novel</Link>
            <NavDropdown title="Reach Me" id="navbarScrollingDropdown" style={{color: '#5B8FB9', marginLeft: '15px'}}>
              <NavDropdown.Item href="https://www.linkedin.com/in/diky/" target="_blank">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="mailto:dikyardiyanto17@gmail.com" target="_blank">
                Email
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/dikyardiyanto17" target="_blank">
                Github
              </NavDropdown.Item>
            </NavDropdown>
            <Link to='/myworks'  style={{color: '#5B8FB9', margin: 'auto', marginLeft: '15px', textDecoration: 'none'}}>
              My Works
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;