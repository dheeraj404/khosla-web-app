// src/ProductCategoryPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './ProductCategoryPage.css'
const ProductCategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('default');
  const [view, setView] = useState('grid');
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const fetchProducts = (category) => {
    // Example API call, replace with your actual API
    axios
      .get(`https://api.escuelajs.co/api/v1/categories`)
      .then((response) => {
        console.log(response.data)
        setProducts(response.data);
        setFilteredProducts(response.data);
        setBrands([...new Set(response.data.map(product => product.brand))]);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const handlePriceFilter = () => {
    setFilteredProducts(products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]));
  };

  const handleBrandFilter = (brand) => {
    const updatedSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedSelectedBrands);
    setFilteredProducts(products.filter(product => updatedSelectedBrands.includes(product.brand)));
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (criteria) {
        case 'price-low-to-high':
          return a.price - b.price;
        case 'price-high-to-low':
          return b.price - a.price;
        case 'popularity':
          return b.popularity - a.popularity;
        case 'average-rating':
          return b.rating - a.rating;
        case 'latest':
          return new Date(b.dateAdded) - new Date(a.dateAdded);
        default:
          return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0); // Reset to first page
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredProducts.slice(offset, offset + itemsPerPage);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="filter-section">
            <h5>Filter by price</h5>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
              className="form-range"
            />
            <Button onClick={handlePriceFilter}>Filter</Button>
            <h5>Filter by Brand</h5>
            {brands.map((brand, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={brand}
                onChange={() => handleBrandFilter(brand)}
              />
            ))}
          </div>
        </div>
        <div className="col-9">
          <div className="sort-section d-flex justify-content-between">
            <DropdownButton id="dropdown-basic-button" title="Sort by">
              <Dropdown.Item onClick={() => handleSort('default')}>Default sorting</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('popularity')}>Sort by popularity</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('average-rating')}>Sort by average rating</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('latest')}>Sort by latest</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('price-low-to-high')}>Sort by price: low to high</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('price-high-to-low')}>Sort by price: high to low</Dropdown.Item>
            </DropdownButton>
            <Form.Select onChange={handleItemsPerPageChange}>
              <option value="8">Show 8</option>
              <option value="16">Show 16</option>
              <option value="24">Show 24</option>
            </Form.Select>
            <div>
              <Button variant="outline-primary" onClick={() => handleViewChange('grid')}>Grid View</Button>
              <Button variant="outline-secondary" onClick={() => handleViewChange('list')}>List View</Button>
            </div>
          </div>
          <div className={view === 'grid' ? 'row' : 'list-view'}>
            {currentItems.map((product, index) => (
              <div key={index} className={view === 'grid' ? 'col-md-4 mb-4' : 'col-12 mb-4'}>
                <div className="card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ₹{product.price}</p>
                    <Button className="btn btn-primary">Buy Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;
