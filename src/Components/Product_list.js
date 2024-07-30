import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useRef } from "react";
const Product_list = () => {
    // State to hold the list of dog images
    const [allProducts, setAllProducts] = useState([]);
    // State for current page number
    const [currentPage, setCurrentPage] = useState(1);
    // Number of images to show per page
    const [productsPerPage] = useState(10);

    // Fetch multiple dog images on component mount
    useEffect(() => {
        const fetchAllProducts = async () => {
            let dogImages = [];
            for (let i = 0; i < 20; i++) { // Fetch 10 dog images
                const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
                const data = await response.json();
                dogImages.push(data.message); // Collect each dog image URL
            }
            setAllProducts(dogImages);
        };

        fetchAllProducts();
    }, []);

    // Calculate the indices for the current page's items
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="App">
            <div className="image-row">
                {currentProducts.map((url, index) => (
                    <ProductCard product={{image:`${url}`}}/>
                ))}
            </div>
            <div className="navigation-buttons">
                <button 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={currentPage === 1}
                    style={{ marginRight: '5px' }}>
                    Previous
                </button>
                <button 
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    disabled={currentPage * productsPerPage >= allProducts.length}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product_list;
