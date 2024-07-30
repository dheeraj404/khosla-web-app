import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const img2=['./Mobiel&TAB.png','./Mobiel&TAB.png','./Mobiel&TAB.png','./Mobiel&TAB.png','./Mobiel&TAB.png','./Mobiel&TAB.png','./Mobiel&TAB.png','./Mobiel&TAB.png',]
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
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000  // Adjust slide transition speed as needed
  };

  return (
    <div>
      <Slider {...settings} style={{width:'100%'}}>
        {img2.map((imgUrl, index) => (
          <div key={index} style={{width:'20%'}}>
            <img src={imgUrl} alt={`Slide ${index + 1}`} style={{width:'100%'}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
