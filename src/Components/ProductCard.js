import React from "react";
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card mb-4 shadow-sm"  style={{ fontFamily: 'Montserrat',}}>
      <div className="badge-container">
        <Badge bg="danger" className="discount-badge">{product.off}% off</Badge>
      </div>
      <div className="image-container position-relative">
        <Link to={`/product/${product.id}`}>
          <Card.Img variant="" src={product.image} alt={product.title} className="product-image" />
        </Link>
        <Button variant="light" className="wishlist-button">
          <FontAwesomeIcon icon={faHeart} />
        </Button>
      </div>
      <Card.Body >
       
        <Card.Title className="product-title">
          <Link to={`/product/${product.id}`} className="text-dark">
            {product.title}
          </Link>
        </Card.Title>
        <div className="pricing">
          <span className="discount-price">{product.price}</span>
          <span className="original-price">{product.Original_price}</span>
          <span className="save-amount">(Save ₹1000)</span>
        </div>
        <div className="button-group">
          <Button variant="primary" className="buy-now-button">Buy Now</Button>
          <Button variant="secondary" className="add-to-cart-button">
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
