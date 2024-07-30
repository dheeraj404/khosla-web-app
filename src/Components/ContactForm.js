// src/ContactForm.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import './ContactForm.css';

const ContactForm = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row className="text-center">
        <Col>
          <h1 style={{ fontFamily: 'Montserrat' }}>Contact Us</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={5} sm={12} className="p-2">
          <div className="d-flex flex-column">
            <div className="p-2">
              <p className="contact-title">Leave Us A Message</p>
            </div>
            <div className="form-group">
              <label htmlFor="name" className="contact-label">Full Name <span style={{ color: "red" }}>*</span></label>
              <input type="text" className="form-control form-control-lg rounded-pill" id="name" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="subject" className="contact-label">Subject<span style={{ color: "red" }}>*</span></label>
              <input type="text" className="form-control form-control-lg rounded-pill" id="subject" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="message" className="contact-label">Paragraph Text</label>
              <textarea className="form-control" id="message" rows="5" style={{ borderRadius: '10px' }}></textarea>
            </div>
            <div className="text-center mt-4">
              <button type="button" className="btn btn-primary rounded-pill contact-btn">Primary Button</button>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12} className="p-2" style={{marginLeft:"30px"}}>
          <div className="d-flex flex-column">
            <div className="p-2">
              <p className="contact-title">Contact Details</p>
            </div>
            <h2 className="company-name">Khosla Electronics Pvt Ltd</h2>
            <p className="company-address">
              15/2B Dhirendra Nath Ghose Road, Kolkata 700025
            </p>
            <p className="contact-section-title">Call us:</p>
            <p className="contact-detail">
              +91 9511943020
            </p>
            <p className="contact-section-title">Email us:</p>
            <p className="contact-detail">
              khoslaonline@khoslaelectronics.com
            </p>
            <p className="contact-section-title">Store Opening Hours:</p>
            <Row>
              <Col xs={6}>
                <p>Sunday</p>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
              </Col>
              <Col xs={6}>
                <p>10.00 AM to 9.30 PM</p>
                <p>10.00 AM to 9.30 PM</p>
                <p>10.00 AM to 9.30 PM</p>
                <p>10.00 AM to 9.30 PM</p>
                <p>10.00 AM to 9.30 PM</p>
                <p>10.00 AM to 9.30 PM</p>
                <p>10.00 AM to 9.30 PM</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
