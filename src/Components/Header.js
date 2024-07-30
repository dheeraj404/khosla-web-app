import React from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import './Header.css'; // Import the CSS file for custom styles
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Header = () => {
  return (
    <Navbar bg="" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="brand-name">
        <div style={{fontSize:'2.3rem',color:'rgba(232, 53, 53, 0.963)',  fontFamily: "Montserrat",fontWeight:'800'}}>KHOSLA</div>
        <div style={{fontSize:'1.5rem',fontWeight:'800',lineHeight:'1',color:'red',marginTop:'-10px'}}>ELECTRONICS</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <NavDropdown title="Category" id="basic-nav-dropdown" className="category-dropdown">
            <NavDropdown.Item href="#action/3.1" className="dropdown-item-custom">Category 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="dropdown-item-custom">Category 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="dropdown-item-custom">Category 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="search-form">
          <div className="search-bar-wrapper">
            <input type="text" placeholder="Search here..." className="search-bar" />
            <i className="fas fa-search search-icon"></i>
          </div>
        </Form>
        <Nav className="nav-icons">
          <Nav.Link href="#wishlist"><i className="far fa-heart" aria-hidden="true"></i></Nav.Link>
          <Nav.Link href="#orders"><i className="fas fa-exchange-alt"></i></Nav.Link>
          <Nav.Link href="#cart">
          <AddShoppingCartIcon style={{color:'red'}}/>₹0.00
          </Nav.Link>
        </Nav>
        <Nav className="contact-info" style={{display:'flex',flexDirection:'column'}}>
          <Nav.Link href="tel:+919511943020" className="contact-item">
          <i className="fas fa-headset"></i>
            <span className="contact-text"><span style={{color:'GrayText'}}>Support</span> +91 9511943020</span>
          </Nav.Link>
          <Nav.Link href="mailto:khoslaonline@khoslaelectronics.com" className="contact-item email-item" style={{marginTop:'-20px'}}>
       
            <span className="contact-text">khoslaonline@khoslaelectronics.com</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

