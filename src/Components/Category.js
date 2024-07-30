// src/Category.js
import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categories }) => {
  return (
    <div className="category-list">
      <h5>Category</h5>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item">
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
