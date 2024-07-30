import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Table } from 'react-bootstrap';
import './Checkout.css'; // Import the CSS file

const Checkout = () => {
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    gstin: '',
    salesmanName: '',
    storeName: '',
    country: 'India',
    landmark: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    shippingAddress: {
      firstName: '',
      lastName: '',
      companyName: '',
      gstin: '',
      salesmanName: '',
      storeName: '',
      country: 'India',
      landmark: '',
      streetAddress: '',
      apartment: '',
      city: '',
      state: '',
      postcode: '',
      phone: '',
      email: ''
    }
  });
  const [useDifferentShippingAddress, setUseDifferentShippingAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const items = [
    {
      id: 1,
      name: 'Hitachi 1.5 Ton 3 Star Inverter Split AC',
      price: 37500,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Bluestar Aura (DA80PMC) Desert Cooler 80 Liters',
      price: 12999,
      quantity: 1,
      image: 'https://via.placeholder.com/50'
    }
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 197; // Example fixed shipping cost
  const total = subtotal + shippingCost;

  const handleAddressChange = (e, type, field) => {
    const { value } = e.target;
    setAddress(prevState => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order placed:', { address, paymentMethod, items, total });
  };

  return (
    <Container className="mt-5">
      <h2 style={{display:'flex',justifyContent:'center', fontFamily: "Montserrat",fontWeight:'600',marginBottom:'20px'}}>Checkout</h2>
      <Row>
        <Col md={7}>
          <Form onSubmit={handleSubmit}>
            <h4 style={{ fontFamily: "Montserrat"}}>Billing Details</h4>
            <Row>
              <Col md={6}>
                <Form.Group controlId="billingFirstName">
                  <Form.Label>First name *</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.firstName}
                    onChange={(e) => handleAddressChange(e, 'billing', 'firstName')}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="billingLastName">
                  <Form.Label>Last name *</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.lastName}
                    onChange={(e) => handleAddressChange(e, 'billing', 'lastName')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="billingCompanyName">
                  <Form.Label>Company name (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.companyName}
                    onChange={(e) => handleAddressChange(e, 'billing', 'companyName')}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="billingGSTIN">
                  <Form.Label>GSTIN (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.gstin}
                    onChange={(e) => handleAddressChange(e, 'billing', 'gstin')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="billingSalesmanName">
                  <Form.Label>Salesman's Name (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.salesmanName}
                    onChange={(e) => handleAddressChange(e, 'billing', 'salesmanName')}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="billingStoreName">
                  <Form.Label>Store Name (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.storeName}
                    onChange={(e) => handleAddressChange(e, 'billing', 'storeName')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="billingCountry">
              <Form.Label>Country / Region *</Form.Label>
              <Form.Control
                type="text"
                className="rounded-input"
                value={address.country}
                onChange={(e) => handleAddressChange(e, 'billing', 'country')}
              />
            </Form.Group>
            <Form.Group controlId="billingLandmark">
              <Form.Label>Landmark *</Form.Label>
              <Form.Control
                type="text"
                className="rounded-input"
                value={address.landmark}
                onChange={(e) => handleAddressChange(e, 'billing', 'landmark')}
              />
            </Form.Group>
            <Form.Group controlId="billingStreetAddress">
              <Form.Label>Street address *</Form.Label>
              <Form.Control
                type="text"
                placeholder="House number and street name"
                className="rounded-input"
                value={address.streetAddress}
                onChange={(e) => handleAddressChange(e, 'billing', 'streetAddress')}
              />
              <Form.Control
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="mt-2 rounded-input"
                value={address.apartment}
                onChange={(e) => handleAddressChange(e, 'billing', 'apartment')}
              />
            </Form.Group>
            <Form.Group controlId="billingCity">
              <Form.Label>Town / City *</Form.Label>
              <Form.Control
                type="text"
                className="rounded-input"
                value={address.city}
                onChange={(e) => handleAddressChange(e, 'billing', 'city')}
              />
            </Form.Group>
            <Form.Group controlId="billingState">
              <Form.Label>State *</Form.Label>
              <Form.Control
                type="text"
                className="rounded-input"
                value={address.state}
                onChange={(e) => handleAddressChange(e, 'billing', 'state')}
              />
            </Form.Group>
            <Form.Group controlId="billingPostcode">
              <Form.Label>PIN Code *</Form.Label>
              <Form.Control
                type="text"
                className="rounded-input"
                value={address.postcode}
                onChange={(e) => handleAddressChange(e, 'billing', 'postcode')}
              />
            </Form.Group>
            <Form.Group controlId="billingPhone">
              <Form.Label>Phone *</Form.Label>
              <Form.Control
                type="text"
                className="rounded-input"
                value={address.phone}
                onChange={(e) => handleAddressChange(e, 'billing', 'phone')}
              />
            </Form.Group>
            <Form.Group controlId="billingEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                className="rounded-input"
                value={address.email}
                onChange={(e) => handleAddressChange(e, 'billing', 'email')}
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Ship to a different address?"
              className="mt-3"
              checked={useDifferentShippingAddress}
              onChange={() => setUseDifferentShippingAddress(!useDifferentShippingAddress)}
            />
            {useDifferentShippingAddress && (
              <div className="mt-4">
                <h4>Shipping Details</h4>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="shippingFirstName">
                      <Form.Label>First name *</Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-input"
                        value={address.shippingAddress.firstName}
                        onChange={(e) => handleAddressChange(e, 'shipping', 'firstName')}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="shippingLastName">
                      <Form.Label>Last name *</Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-input"
                        value={address.shippingAddress.lastName}
                        onChange={(e) => handleAddressChange(e, 'shipping', 'lastName')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="shippingStreetAddress">
                  <Form.Label>Street address *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="House number and street name"
                    className="rounded-input"
                    value={address.shippingAddress.streetAddress}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'streetAddress')}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="mt-2 rounded-input"
                    value={address.shippingAddress.apartment}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'apartment')}
                  />
                </Form.Group>
                <Form.Group controlId="shippingCity">
                  <Form.Label>Town / City *</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.shippingAddress.city}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'city')}
                  />
                </Form.Group>
                <Form.Group controlId="shippingState">
                  <Form.Label>State *</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.shippingAddress.state}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'state')}
                  />
                </Form.Group>
                <Form.Group controlId="shippingPostcode">
                  <Form.Label>PIN Code *</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.shippingAddress.postcode}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'postcode')}
                  />
                </Form.Group>
                <Form.Group controlId="shippingPhone">
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-input"
                    value={address.shippingAddress.phone}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'phone')}
                  />
                </Form.Group>
                <Form.Group controlId="shippingEmail">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    className="rounded-input"
                    value={address.shippingAddress.email}
                    onChange={(e) => handleAddressChange(e, 'shipping', 'email')}
                  />
                </Form.Group>
              </div>
            )}
            <Form.Group controlId="orderNotes" className="mt-3">
              <Form.Label>Order notes (optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="rounded-input"
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={5}>
          <div className="order-summary">
            <h4>Your order</h4>
            <Table bordered>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td>Subtotal</td>
                  <td>₹{subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Free shipping"
                      name="shippingMethod"
                      value="free"
                      className="mb-1"
                    />
                    <Form.Check
                      type="radio"
                      label={`Flat rate: ₹${shippingCost}`}
                      name="shippingMethod"
                      value="flat"
                      className="mb-1"
                      defaultChecked
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>₹{total.toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
            <h4>Pay securely</h4>
            <p>Pay securely by Credit or Debit card or net banking through PayU.</p>
            <Form.Group controlId="paymentMethod">
              <Form.Check
                type="radio"
                label="Credit Card"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="PayPal"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Cash on Delivery"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 rounded-button" style={{ width: '100%' ,backgroundColor:'RED',outline:'none',border:'none'}}>
              Place Order
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
