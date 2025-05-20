// Proposal.js - Evlenme teklifi ekranı
import React, { useRef, useState } from "react";
import "../styles/Proposal.css";
import ringImage from "../assets/images/ring.png";
import resim1 from "../assets/images/resim1.jpeg";
import resim2 from "../assets/images/resim2.jpeg";
import resim3 from "../assets/images/resim3.jpeg";
import resim7 from "../assets/images/resim7.jpeg";
import resim8 from "../assets/images/resim8.jpeg";
import resim9 from "../assets/images/resim9.jpeg";

const images = [resim1, resim2, resim3, resim7, resim8, resim9];
// Dil seçenekleri
const translations = {
  tr: "Benimle evlenir misin?",
  en: "Will you marry me?",
  fr: "Veux-tu m'épouser?",
  it: "Vuoi sposarmi?",
  ar: "هل تتزوجني؟",
  zh: "你愿意嫁给我吗？",
};
const Proposal = ({ onRestart }) => {
  const containerRef = useRef(null);
  const [language, setLanguage] = useState("tr");

  const moveButton = (e) => {
    const button = e.target;
    const container = containerRef.current;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxLeft = containerWidth - buttonWidth - 20;
    const maxTop = containerHeight - buttonHeight - 20;

    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    button.style.position = "absolute";
    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
  };

  const handleYesClick = () => {
    // Yeni sekmede Slideshow başlat
    const slideshowWindow = window.open("", "_blank");
    if (slideshowWindow) {
      let currentIndex = 0;
      slideshowWindow.document.write(`
                <html>
                <head>
                    <title>Slideshow</title>
                    <style>
                        body {
                            margin: 0;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: #000;
                            height: 100vh;
                        }
                        img {
                            max-width: 90%;
                            max-height: 90%;
                            border-radius: 20px;
                            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
                        }
                    </style>
                </head>
                <body>
                    <img id="slideshow-image" src="${images[0]}" alt="Slideshow" />
                </body>
                </html>
            `);

      // Görsel döngüsü başlat
      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        const imgElement =
          slideshowWindow.document.getElementById("slideshow-image");
        if (imgElement) {
          imgElement.src = images[currentIndex];
        }
      }, 1000); // Görsel değiştirme süresi
    }
  };

  return (
    <div className="proposal-container" ref={containerRef}>
      <img src={ringImage} alt="Ring" className="proposal-ring" />
      <div className="proposal-text">
        <h1>{translations[language]}</h1>
        <div className="language-selector-container">
          <select
            className="language-selector"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="ar">🇦🇪 العربية</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </div>
      </div>
      <div className="proposal-buttons">
        <button className="yes-button" onClick={handleYesClick}>
          Evet ❤️
        </button>
        <button
          className="no-button"
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
        >
          Hayır 😂
        </button>
      </div>
    </div>
  );
};

export default Proposal;
