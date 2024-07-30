import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Carousel, Modal, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faChevronUp, faChevronDown, faThumbsUp, faThumbsDown, faShoppingCart, faBolt } from '@fortawesome/free-solid-svg-icons';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [showMoreOffers, setShowMoreOffers] = useState(false);
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [showMoreOverview, setShowMoreOverview] = useState(false);
  const [showMoreSpecifications, setShowMoreSpecifications] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalReviewIndex, setModalReviewIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const galleryRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    axios.get(`/api/${productId}.json`)
      .then(response => {
        setProduct(response.data);
        console.log(response.data)
        setSelectedImage(response.data.images[0]);
        setTimeout(updateScrollButtons, 100); // Call after initial render
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  const updateScrollButtons = () => {
    if (galleryRef.current) {
      setCanScrollUp(galleryRef.current.scrollTop > 0);
      setCanScrollDown(galleryRef.current.scrollHeight > galleryRef.current.clientHeight + galleryRef.current.scrollTop);
    }
  };

  const scrollImages = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'up' ? -100 : 100;
      galleryRef.current.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
    setTimeout(updateScrollButtons, 300); // Delay to allow for smooth scrolling
  };

  const handleShowModal = (reviewIndex, imageIndex) => {
    setModalReviewIndex(reviewIndex);
    setModalImageIndex(imageIndex);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handlePrevImage = () => {
    if (modalImageIndex > 0) {
      setModalImageIndex(modalImageIndex - 1);
    } else if (modalReviewIndex > 0) {
      setModalReviewIndex(modalReviewIndex - 1);
      setModalImageIndex(product.reviews[modalReviewIndex - 1].images.length - 1);
    }
  };

  const handleNextImage = () => {
    if (modalImageIndex < product.reviews[modalReviewIndex].images.length - 1) {
      setModalImageIndex(modalImageIndex + 1);
    } else if (modalReviewIndex < product.reviews.length - 1) {
      setModalReviewIndex(modalReviewIndex + 1);
      setModalImageIndex(0);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="product-details">
      <Row>
        <Col md={6} className="image-section d-none d-md-flex">
          <div className="image-gallery-container">
            {canScrollUp && <Button variant="light" onClick={() => scrollImages('up')}><FontAwesomeIcon icon={faChevronUp} /></Button>}
            <div className="image-gallery" ref={galleryRef} onScroll={updateScrollButtons}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  className={`thumbnail img-fluid mb-2 ${selectedImage === image ? 'selected' : ''}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
            {canScrollDown && <Button variant="light" onClick={() => scrollImages('down')}><FontAwesomeIcon icon={faChevronDown} /></Button>}
          </div>
          <div className="main-image">
            <img src={selectedImage} alt={product.name} className="img-fluid" />
          </div>
        </Col>
        <Col className="image-section d-md-none">
          <Carousel indicators={true} interval={null}>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 carousel-image"
                  src={image}
                  alt={`Slide ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6} className="details-section">
          <h1>{product.name}</h1>
          <div className="rating-badge">
            <span className="rating-value">{product.rating}★</span>
            <span className="rating-text">{product.reviewsCount} Ratings & {Math.floor(product.reviewsCount / 10)} Reviews</span>
          </div>
          <div className="price-section mt-3">
            <h4>Special price</h4>
            <div>
              <span className="discounted-price">₹{product.discountedPrice}</span>
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="discount-percent">({product.discountPercent}% off)</span>
            </div>
          </div>
          <div className="offers-section mt-4">
            <h4>Offers</h4>
            <ul>
              {product.offers.slice(0, showMoreOffers ? product.offers.length : 3).map((offer, index) => (
                <li key={index} className="offer-item">
                  <FontAwesomeIcon icon={faTag} className="offer-icon" />
                  <div className="offer-text">
                    <strong>{offer.type} Offer: </strong> {offer.details}
                  </div>
                </li>
              ))}
            </ul>
            {product.offers.length > 3 && (
              <Button variant="link" className="show-more" onClick={() => setShowMoreOffers(!showMoreOffers)}>
                {showMoreOffers ? 'Show less' : `Show more`}
              </Button>
            )}
          </div>
          <div className="product-actions mt-3">
            <Button variant="secondary" className="w-100 mb-2"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button>
            <Button variant="danger" className="w-100"><FontAwesomeIcon icon={faBolt} /> Buy Now</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="overview-section">
            <h4>Overview</h4>
            <ul>
              {product.description.slice(0, showMoreOverview ? product.description.length : 5).map((item, index) => (
                <li key={index} className="overview-item">{item}</li>
              ))}
            </ul>
            {product.description.length > 5 && (
              <Button variant="link" className="show-more-overview" onClick={() => setShowMoreOverview(!showMoreOverview)}>
                {showMoreOverview ? 'Show less' : 'Show more'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="specifications-section">
            <h4>Specifications</h4>
            <Table striped bordered hover>
              <tbody>
                {Object.entries(product.specifications).slice(0, showMoreSpecifications ? Object.entries(product.specifications).length : 5).map(([key, value], index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {Object.entries(product.specifications).length > 5 && (
              <Button variant="link" className="show-more-specifications" onClick={() => setShowMoreSpecifications(!showMoreSpecifications)}>
                {showMoreSpecifications ? 'Show less' : 'Show more'}
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col style={{border:'1px solid #ddd' ,padding:'1rem'}}>
          <div className="rating-section">
            <h3>Ratings & Reviews</h3>
            <Button variant="outline-primary" className="rate-product">Rate Product</Button>
            <div className="rating-overview">
              <div className="overall-rating">
                <h1>{product.rating}★</h1>
                <p>{product.reviewsCount} Ratings & </p>
                <span style={{marginTop:'-20px'}}>{Math.floor(product.reviewsCount / 10)} Reviews</span>
              </div>
              <div className="rating-distribution">
                {Object.entries(product.ratingDistribution).map(([star, count], index) => (
                  <div key={index} className="rating-bar">
                    <span>{star}★</span>
                    <div className="progress">
                      <div
                        className={`progress-bar star-${star}`}
                        role="progressbar"
                        style={{ width: `${(count / product.reviewsCount) * 100}%` }}
                        aria-valuenow={(count / product.reviewsCount) * 100}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="count">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="user-images-section mt-4">
            <h4>User Images</h4>
            <div className="user-images">
              {product.images.slice(0, 5).map((image, index) => (
                <img key={index} src={image} alt={`User ${index}`} className="user-image" onClick={() => handleShowModal(index)} />
              ))}
              {product.images.length > 5 && (
                <div className="more-images" onClick={() => handleShowModal(0)}>+ {product.images.length - 5}</div>
              )}
            </div>
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>User Images ({product.images.length})</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-images">
                  <Button variant="light" className="modal-nav" onClick={handlePrevImage} disabled={modalReviewIndex === 0 && modalImageIndex === 0}>
                    Previous
                  </Button>
                  <img
                    src={product.reviews[modalReviewIndex].images[modalImageIndex]}
                    alt={`Review ${modalReviewIndex} Image ${modalImageIndex}`}
                    className="modal-image"
                  />
                  <Button variant="light" className="modal-nav" onClick={handleNextImage} disabled={modalReviewIndex === product.reviews.length - 1 && modalImageIndex === product.reviews[modalReviewIndex].images.length - 1}>
                    Next
                  </Button>
                </div>
                <div className="modal-review-content">
                  <h5>{product.reviews[modalReviewIndex].title}</h5>
                  <p>{product.reviews[modalReviewIndex].content}</p>
                  <p>{product.reviews[modalReviewIndex].author}</p>
                  <p>{product.reviews[modalReviewIndex].authorDetails}</p>
                  <p>{product.reviews[modalReviewIndex].date}</p>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="reviews-section mt-4">
            {product.reviews.slice(0, showMoreReviews ? product.reviews.length : 2).map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-rating">
                  <span className="review-rating-value">{review.rating}★</span>
                </div>
                <div className="review-content">
                  <h5>{review.title}</h5>
                  <p>{review.content}</p>
                  {review.images.length > 0 && (
                    <div className="review-images">
                      {review.images.map((image, imgIndex) => (
                        <img key={imgIndex} src={image} alt={`Review ${imgIndex}`} className="review-image" onClick={() => handleShowModal(index, imgIndex)} />
                      ))}
                    </div>
                  )}
                  <div className="review-author">
                    <p>{review.author}</p>
                    <p>{review.authorDetails}</p>
                    <p>{review.date}</p>
                  </div>
                  <div className="review-actions">
                    <Button variant="link"><FontAwesomeIcon icon={faThumbsUp} /> {review.likes}</Button>
                    <Button variant="link"><FontAwesomeIcon icon={faThumbsDown} /> {review.dislikes}</Button>
                  </div>
                </div>
              </div>
            ))}
            {product.reviews.length > 2 && (
              <Button variant="link" className="show-more-reviews" onClick={() => setShowMoreReviews(!showMoreReviews)}>
                {showMoreReviews ? 'Show less' : `Show more`}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

