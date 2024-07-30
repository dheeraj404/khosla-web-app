import React, { useState } from 'react';
import './Top_Header.css';  // Make sure your CSS file is correctly imported
import Login from './Login';
import Signup from './Signup';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ModalCustom.css'; // Import custom CSS file for modal

const Top_Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign-up

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="top-header">
      <div className="promotional-text">
        Homemakers You Can Rely on <span style={{marginRight:'4px'}}> | </span> Free Shipping Order Above Rs. 5000
      </div>
      <div className="link-container">
        <a href="/store-locator" className="nav-link">
          <img src='./location.svg' alt="Store Locator" /> Store Locator
        </a>
        <span style={{marginRight:'20px'}}>|</span>
        <a href="#" className="nav-link" onClick={handleShow}>
          <img src='./user.svg' alt="My Account" /> My Account
        </a>
        <span style={{marginRight:'20px'}}>|</span>
        <a href="/contact-us" className="nav-link">
          <img src='./contact-us.svg' alt="Contact Us" /> Contact Us
        </a>
      </div>
      <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal" className='pop_up'>
        <Modal.Header className="modal-header-custom">
          <button type="button" className="close" onClick={handleClose} aria-label="Close">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
        </Modal.Body>
      </Modal>
    </div>
  );
};


export default Top_Header;




