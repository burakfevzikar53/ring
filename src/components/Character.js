// src/components/Character.js
import React, { useState, useEffect } from "react";
import "../styles/Character.css";
import characterImg from "../assets/images/character.png";

const Character = ({ position, setPosition }) => {
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isJumping, setIsJumping] = useState(false);
  const gravity = 0.5;
  const jumpStrength = -12;
  const speed = 5;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setVelocity((v) => ({ ...v, x: -speed }));
      if (e.key === "ArrowRight") setVelocity((v) => ({ ...v, x: speed }));
      if (e.key === " " && !isJumping) {
        setVelocity((v) => ({ ...v, y: jumpStrength }));
        setIsJumping(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setVelocity((v) => ({ ...v, x: 0 }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isJumping]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((pos) => {
        const newX = pos.x + velocity.x;
        const newY = Math.min(pos.y + velocity.y, 400);
        
        // Yer çekimi uygulaması
        const newVelocityY = newY >= 400 ? 0 : velocity.y + gravity;
        setVelocity((v) => ({ ...v, y: newVelocityY }));
        
        // Yere indiğinde zıplamayı serbest bırak
        if (newY >= 400) setIsJumping(false);
        
        return { x: newX, y: newY };
      });
    }, 20);

    return () => clearInterval(interval);
  }, [velocity, setPosition]);

  return (
    <img
      src={characterImg}
      alt="Character"
      className="character"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default Character;
