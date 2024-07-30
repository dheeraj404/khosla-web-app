import React from 'react';
import Slider from 'react-slick';

const SlidingImageHeader = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={{ margin: '20px' }}>
            <Slider {...settings}>
                <div><img src="/path/to/mobile-tab.jpg" alt="Mobile & Tab" /></div>
                <div><img src="/path/to/laptop.jpg" alt="Computer & Laptop" /></div>
                <div><img src="/path/to/tv.jpg" alt="TV" /></div>
                <div><img src="/path/to/speaker.jpg" alt="Bluetooth Speaker" /></div>
                <div><img src="/path/to/camera.jpg" alt="Camera" /></div>
                <div><img src="/path/to/headphone.jpg" alt="Headphone" /></div>
                <div><img src="/path/to/chimney.jpg" alt="Chimney" /></div>
                <div><img src="/path/to/mixer.jpg" alt="Mixer Grinder" /></div>
            </Slider>
        </div>
    );
};

export default SlidingImageHeader;
