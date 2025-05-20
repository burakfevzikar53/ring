// Collectible.js - Düşen nesneler bileşeni
import React, { useEffect, useState } from 'react';
import '../styles/Collectible.css';

const Collectible = ({ item }) => {
    const [positionY, setPositionY] = useState(0);

    useEffect(() => {
        const fallInterval = setInterval(() => {
            setPositionY((prevY) => prevY + item.speed);
        }, 50);

        return () => clearInterval(fallInterval);
    }, [item.speed]);

    return (
        <img
            src={item.image}
            alt="collectible"
            className="collectible"
            style={{ top: `${positionY}vh`, left: `${item.positionX}%` }}
        />
    );
};

export default Collectible;
