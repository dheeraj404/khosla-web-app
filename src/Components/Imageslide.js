import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const img2=['1st-Banner-1920500-10.png','1st-Banner-1920500-12.png','1st-Banner-1920500-13.png','1st-Banner.png']
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Replace 'your-api-url' with the actual API URL
        const response = await axios.get('https://pixabay.com/api/?key=43791671-19e2af4611789d09947044d02&q=electronics&image_type=photo');
        // Extract the image URLs from the hits array
        const imageUrls = response.data.hits.map(hit => hit.largeImageURL);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []); // The empty array ensures the effect runs only once after the initial render

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000  // Adjust slide transition speed as needed
  };

  return (
    <div>
      <Slider {...settings}>
        {img2.map((imgUrl, index) => (
          <div key={index} >
            <img src={imgUrl} alt={`Slide ${index + 1}`} style={{ width: '100%'}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
