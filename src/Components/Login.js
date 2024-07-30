import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Auth.css'; // Import the CSS file

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (err) {
      console.error(err);
      alert('Error logging in, please check your credentials.');
    }
  };

  return (
    <Container className="auth-container">
      <h3 className="text-center">Login</h3>
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

        <Button variant="primary" type="submit" block className="long-btn" style={{ backgroundColor: 'red', border: 'none' }}>
          Login
        </Button>
      </Form>
      <div className="mt-3 text-right">
        <p>Don't have an account? <Button variant="link" onClick={toggleForm} className="toggle-btn m-2" style={{ border: '1px solid gray' }}>Sign Up</Button></p>
      </div>
      <hr />
      <div className="text-center">
        <p>Or login with</p>
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

export default Login;
