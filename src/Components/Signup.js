// src/components/Signup.js

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Auth.css'; // Import the CSS file

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Sign up successful!');
    } catch (err) {
      console.error(err);
      alert('Error signing up, please try again.');
    }
  };

  return (
    <Container className="auth-container">
      <h3 className="text-center">Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block className="long-btn" style={{ backgroundColor: 'red', border: 'none' }}>
          Sign Up
        </Button>
      </Form>
      <div className="mt-3 text-right">
        <p>Already have an account? <Button variant="link" onClick={toggleForm} className="toggle-btn m-2" style={{ border: '1px solid gray' }}>Login</Button></p>
      </div>
      <hr />
      <div className="text-center">
        <p>Or sign up with</p>
        <Button variant="outline-light" className="m-1 social-btn">
          <i className="fab fa-google"></i> Google
        </Button>
        <Button variant="outline-light" className="m-1 social-btn">
          <i className="fab fa-facebook-f"></i> Facebook
        </Button>
        <Button variant="outline-light" className="m-1 social-btn">
          <i className="fab fa-instagram"></i> Instagram
        </Button>
      </div>
    </Container>
  );
};

export default SignUp;
