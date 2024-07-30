import React from "react";
import ProductCard from "./ProductCard";
import './RelatedProducts.css';

const RelatedProducts = ({ products }) => {
    return (
        <div className="container home_product">
            <p className="category">{"Related Products"}</p>
            <div className="product-list row">
                {products.map((product, index) => (
                    <div key={index} className="">
                        <ProductCard product={product} />
                    </div> 
                ))}
            </div>
           
        </div>
    );
};

export default RelatedProducts;
