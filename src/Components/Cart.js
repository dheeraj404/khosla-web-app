import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';
import CartItem from './CartItem';
import axios from 'axios';
import './Cart.css'; // Import the CSS file

const Cart = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState({
    country: '',
    state: '',
    city: '',
    postcode: ''
  });
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    // Fetch the cart items from the API
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    ));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleCalculateShipping = () => {
    // Show address fields when checkbox is checked
    setShowAddressFields(!showAddressFields);
    if (!showAddressFields) {
      setShippingCost(0); // Reset shipping cost when hiding address fields
    }
  };

  const handleUpdateShipping = () => {
    // Calculate shipping cost based on address
    let cost = 0;
    if (address.country && address.state && address.city && address.postcode) {
      // Example shipping cost calculation
      cost = 50; // Fixed cost for simplicity
    }
    setShippingCost(cost);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="container mt-5">
      <h2 style={{display:'flex',justifyContent:'center', fontFamily: "Montserrat",marginBottom:'2rem',fontWeight:'600'}}>Cart</h2>
      <Table responsive striped bordered hover style={{ fontFamily: "Montserrat"}}>
        <thead >
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity} 
            />
          ))}
        </tbody>
      </Table>
      <Row className="d-flex justify-content-between " style={{marginTop:'20px'}}>
        <Col md={6}>
          <Form inline className="coupon-form">
            <Form.Control type="text" placeholder="Coupon code" className="coupon-input" />
            <Button variant="dark" className="coupon-button">Apply coupon</Button>
          </Form>
        </Col>
        <Col md={6} className="text-right">
          <Button variant="secondary" className="rounded-button mr-2">Update cart</Button>
          <Button variant="warning" className="rounded-button">Proceed to checkout</Button>
        </Col>
      </Row>
      <div className="mt-4">
        <Row>
          <Col md={8} className='m-8'></Col>
          <Col md={8} style={{ fontFamily: "Montserrat"}}>
            <h4>Cart totals</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>₹{subtotal.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>
                    Enter your address to view shipping options.
                    <Form.Check
                      type="checkbox"
                      label="Calculate shipping"
                      onChange={handleCalculateShipping}
                      className="mt-2"
                    />
                    {showAddressFields && (
                      <>
                        <Form.Group className="mt-2">
                          <Form.Control
                            type="text"
                            placeholder="Country"
                            name="country"
                            value={address.country}
                            onChange={handleAddressChange}
                          />
                          <Form.Control
                            type="text"
                            placeholder="State"
                            name="state"
                            value={address.state}
                            onChange={handleAddressChange}
                            className="mt-2"
                          />
                          <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange}
                            className="mt-2"
                          />
                          <Form.Control
                            type="text"
                            placeholder="Postcode / ZIP"
                            name="postcode"
                            value={address.postcode}
                            onChange={handleAddressChange}
                            className="mt-2"
                          />
                        </Form.Group>
                        <Button variant="dark" onClick={handleUpdateShipping} className="mt-2">
                          Update
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>₹{total.toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
