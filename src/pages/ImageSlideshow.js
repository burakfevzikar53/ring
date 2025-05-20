// ImageSlideshow.js - Resim döngüsü ekranı
import React, { useState, useEffect } from 'react';
import resim1 from '../assets/images/resim1.jpeg';
import resim2 from '../assets/images/resim2.jpeg';
import resim3 from '../assets/images/resim3.jpeg';
import resim7 from '../assets/images/resim7.jpeg';
import resim8 from '../assets/images/resim8.jpeg';
import resim9 from '../assets/images/resim9.jpeg';
import '../styles/Slideshow.css';

const images = [resim1, resim2, resim3, resim7, resim8, resim9];

const ImageSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); // Görsel değiştirme süresi

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
        </div>
    );
};

export default ImageSlideshow;
