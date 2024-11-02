import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../images/movies/65.jpg';
import img1 from '../images/movies/the-black-demon.jpg';
import img2 from '../images/movies/the-little-mermaid.jpeg';
import img3 from '../images/movies/the-tank.jpeg';
import img4 from '../images/movies/the-covenant.jpg';


const Carousel = ({ setCenterIndex,centerIndex }) => {
    
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "10px",
        beforeChange: (current, next) => setCenterIndex(next), // Update center index here
    };

    const handleImageClick = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
            setCenterIndex(index); // Also update center index on click
        }
    };

    const imageStyle = (isCenter) => ({
        width: isCenter ? '100%' : '80%',
        height: isCenter ? '100%' : '80%',
        transform: isCenter ? 'scale(1.1)' : 'scale(0.9)',
        opacity: isCenter ? 1 : 0.7,
        borderRadius:"10px",
        boxShadow: isCenter ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'all 0.5s ease, border 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        margin: 'auto',
    });
    
    const sliderStyle = {
        width: '50%',
        height: '400px',
        marginLeft: 'auto',
        top: '30%',
        position: 'relative',
        overflow: 'hidden', 
        zIndex: 3  

    };
    const images = [img, img1, img2, img3, img4];

    return (
        <Slider ref={sliderRef} {...settings} style={sliderStyle} >
            
            {images.map((image, index) => (
                <div key={index} onClick={() => handleImageClick(index)} >
                    <img src={image} alt={`slide-${index}`} style={imageStyle(index === centerIndex)} />
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
