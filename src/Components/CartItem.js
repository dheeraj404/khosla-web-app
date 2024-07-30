import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    onUpdateQuantity(item.id, e.target.value);
  };

  return (
    <tr>
      <td>
        <img src={item.image} alt={item.name} width="50" />
      </td>
      <td>{item.name}</td>
      <td>₹{item.price.toFixed(2)}</td>
      <td>
        <Form.Control as="select" value={item.quantity} onChange={handleQuantityChange}>
          {[...Array(10).keys()].map(x => (
            <option key={x + 1} value={x + 1}>{x + 1}</option>
          ))}
        </Form.Control>
      </td>
      <td>₹{(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <Button variant="danger" onClick={() => onRemove(item.id)}>×</Button>
      </td>
    </tr>
  );
};

export default CartItem;
