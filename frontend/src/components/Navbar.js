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
    <Navbar id='navbar' style={{position: 'fixed', width: '100vw', backgroundColor: '#03001C', color: '#5B8FB9', height: '10vh', display: 'block', zIndex: '100'}}>
      <Container fluid>
        <Navbar.Brand style={{color: '#5B8FB9'}}><img src={MyLogo} style={{width: '50px'}} alt='' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" style={{color: '#5B8FB9', margin: 'auto', textDecoration: 'none'}} className="hovering">Home</Link>
            <Link style={{color: '#5B8FB9', margin: 'auto', marginLeft: '25px', textDecoration: 'none'}} to='staytuned'  className="hovering2" >My Novel</Link>
            <NavDropdown title="Reach Me" id="navbarScrollingDropdown" style={{color: '#5B8FB9', marginLeft: '25px'}}>
              <NavDropdown.Item href="https://www.linkedin.com/in/diky/" target="_blank" className='droppeddown'>Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="mailto:dikyardiyanto17@gmail.com" target="_blank" className='droppeddown2'>
                Email
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/dikyardiyanto17" target="_blank" className='droppeddown'>
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://api.whatsapp.com/send?phone=6285213030871&text=Hi Diky" target="_blank" className='droppeddown2'>
                Whatsapp
              </NavDropdown.Item>
            </NavDropdown>
            <Link to='/myworks'  style={{color: '#5B8FB9', margin: 'auto', marginLeft: '25px', textDecoration: 'none'}} className="hovering">
              My Works
            </Link>
            <Link to='/certificate'  style={{color: '#5B8FB9', margin: 'auto', marginLeft: '25px', textDecoration: 'none'}} className="hovering2">
              Certificate
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;