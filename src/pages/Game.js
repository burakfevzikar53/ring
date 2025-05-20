// Game.js - Karakter kontrolü ve nesne toplama mekanizması
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Game.css';
import flowerImage from '../assets/images/artı2-puan.png';
import icecreamImage from '../assets/images/artı-puan.png';
import ringImage from '../assets/images/eksi-puan.png';
import characterImage from '../assets/images/toplayıcı.png';

const items = [
    { type: 'flower', image: flowerImage, points: 20 },
    { type: 'icecream', image: icecreamImage, points: 10 },
    { type: 'ring', image: ringImage, points: -10 },
];

const Game = ({ onProposal }) => {
    const [score, setScore] = useState(0);
    const [fallingItems, setFallingItems] = useState([]);
    const [characterPosition, setCharacterPosition] = useState(50);
    const characterRef = useRef(null);
    const animationFrameRef = useRef(null);

    // Nesne yaratma
    useEffect(() => {
        const addItem = () => {
            const randomItem = items[Math.floor(Math.random() * items.length)];
            const newItem = {
                ...randomItem,
                id: Date.now(),
                positionX: Math.random() * 90,
                positionY: 0,
                speed: Math.random() * 3 + 2,
            };
            setFallingItems((prevItems) => [...prevItems, newItem]);
        };

        const interval = setInterval(addItem, 1000);
        return () => clearInterval(interval);
    }, []);

// Karakterin kontrolü (Dokunmatik ekranda çalışması için)
useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === 'ArrowLeft') {
            setCharacterPosition((prev) => Math.max(prev - 5, 0));
        }
        if (e.key === 'ArrowRight') {
            setCharacterPosition((prev) => Math.min(prev + 5, 90));
        }
    };

    const handleTouchStart = (e) => {
        const touchX = e.touches[0].clientX;
        const screenWidth = window.innerWidth;
        const middle = screenWidth / 2;

        if (touchX < middle) {
            setCharacterPosition((prev) => Math.max(prev - 5, 0));
        } else {
            setCharacterPosition((prev) => Math.min(prev + 5, 90));
        }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
        window.removeEventListener('keydown', handleKeyPress);
        window.removeEventListener('touchstart', handleTouchStart);
    };
}, []);


    // Animasyon döngüsü ve çarpışma kontrolü
    useEffect(() => {
        const animate = () => {
            setFallingItems((prevItems) =>
                prevItems.map((item) => {
                    const newPositionY = item.positionY + item.speed;
                    const itemElement = document.getElementById(item.id);
                    const characterElement = characterRef.current;

                    if (itemElement && characterElement) {
                        const itemRect = itemElement.getBoundingClientRect();
                        const characterRect = characterElement.getBoundingClientRect();

                        // Çarpışma kontrolü
                        const isColliding =
                            itemRect.right > characterRect.left &&
                            itemRect.left < characterRect.right &&
                            itemRect.bottom > characterRect.top &&
                            itemRect.top < characterRect.bottom;

                        if (isColliding) {
                            setScore((prevScore) => prevScore + item.points);
                            return { ...item, collected: true };
                        }

                        // Nesneyi hareket ettir
                        itemElement.style.top = `${newPositionY}px`;
                    }

                    // Nesne yere düştüyse kaldır
                    if (newPositionY > window.innerHeight) {
                        return { ...item, collected: true };
                    }

                    return { ...item, positionY: newPositionY };
                }).filter((item) => !item.collected)
            );

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameRef.current);
    }, [characterPosition]);

    // 100 puana ulaşıldığında evlenme teklifi ekranı
    useEffect(() => {
        if (score >= 100) {
            onProposal();
        }
    }, [score, onProposal]);

    return (
        <div className="game-container">
            <div className="score">Puan: {score}</div>
            <img
                src={characterImage}
                alt="Character"
                ref={characterRef}
                className="game-character"
                style={{ left: `${characterPosition}%` }}
            />
            {fallingItems.map((item) => (
                <img
                    key={item.id}
                    id={item.id}
                    src={item.image}
                    alt={item.type}
                    className="falling-item"
                    style={{
                        left: `${item.positionX}%`,
                        top: `${item.positionY}px`,
                    }}
                />
            ))}
        </div>
    );
};

export default Game;
