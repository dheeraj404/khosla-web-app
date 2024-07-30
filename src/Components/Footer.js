// src/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import your CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="subscription-bar py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-left mb-2 mb-md-0">
              <img src="/tel.svg" className="icon" alt="subscribe" />
              <span className="subscribe-text">Subscribe here for</span>
            </div>
            <div className="col-md-4 text-center text-md-left mb-2 mb-md-0">
              <span className="new-products">... New products and deals</span>
            </div>
            <div className="col-md-4 text-center text-md-right">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your Email" />
                <div className="input-group-append">
                  <button className="btn btn-dark" type="button">
                    <span>Sign up </span>
                    <img src="./bell.png" alt="sign up" className="ml-2"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row text-center text-md-left">
          <div className="col-md-4 mb-4">
            <h1>KHOSLA <span className="electronic">ELECTRONICS</span></h1>
            <div className="social-icons">
              <Link to="#"><img src="/facebook.png" alt="Facebook" /></Link>
              <Link to="#"><img src="/insta.png" alt="Instagram" /></Link>
            </div>
          </div>
          <div className="col-md-2 mb-4">
            <h6 className="font-weight-bold">Find It Fast</h6>
            <ul className="list-unstyled">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="#">Store Locator</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="font-weight-bold">Terms & Conditions</h6>
            <ul className="list-unstyled">
              <li><Link to="#">Terms & Conditions</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Shipping Options</Link></li>
              <li><Link to="/payment-return-policies">Payment & Return Policies</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="font-weight-bold">Customer Care</h6>
            <ul className="list-unstyled">
              <li><Link to="#">Cart</Link></li>
              <li><Link to="#">Checkout</Link></li>
              <li><Link to="#">My Account</Link></li>
              <li><Link to="#">Wishlist</Link></li>
            </ul>
          </div>
        </div>
        <div className="row text-center payment-icons mb-4">
          <div className="col">
            <img src="./i1.svg" alt="MasterCard" />
            <img src="./i2.svg" alt="Visa" />
            <img src="./i3.svg" alt="American Express" />
            <img src="./i4.svg" alt="UPI" />
          </div>
        </div>
        <div className="row text-center contact-info">
          <div className="col-md-4 mb-4">
            <div className="contact-box">
              <img src="./a.png" alt="Address" />
              <p>15/2B Dhirendra Nath Ghose Road, Kolkata 700025</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-box">
              <img src="./email.png" alt="Email" />
              <p>khoslaonline@khoslaelectronics.com</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-box">
              <img src="./audio.png" alt="Phone" />
              <p>+91 9511943020</p>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <p>Copyright © 2024 Khosla Electronics | Powered by Khosla Electronics</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
