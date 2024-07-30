import React from 'react';

const CartSummary = ({ items, shippingCost }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="mt-4">
      <h4>Cart totals</h4>
      <table className="table">
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>₹{subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>₹{shippingCost.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>₹{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
