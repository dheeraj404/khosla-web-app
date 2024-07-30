import React from "react";

const Homepage_Poster = ({ images }) => {
  // Check if images is properly passed and is an array
  if (!Array.isArray(images)) {
    console.error('Expected "images" to be an array, but got:', images);
    return <p>No images available</p>; // Provide a fallback UI
  }

  // Calculate the column size based on the number of images
  const columnSize = 12 / images.length;
  return (
    <div className="container-md-fluid m-6 container" style={{ padding: '20px' }}>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className={`col-${Math.floor(columnSize)} px-6`}>
            <img src={image.src} alt={image.title} className="img-fluid" style={{borderRadius:'10px'}} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage_Poster;
