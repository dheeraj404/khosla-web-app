import React from "react";
import ProductCard from "./ProductCard";
import './HomeProductBar.css';

const HomeProductBar = ({ products }) => {
    return (
        <div className="container-md home_product">
            <p className="category">{products[0].category}</p>
            <div className="product-list row">
                {products.map((product, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <ProductCard product={product} />
                    </div> 
                ))}
            </div>
            <div className="viewsall text-center mt-4">
                <button className="btn btn-primary">View All</button>
            </div>
        </div>
    );
};

export default HomeProductBar;
