// Proposal.js - Evlenme teklifi ekranı
import React, { useRef, useState } from "react";
import "../styles/Proposal.css";
import ringImage from "../assets/images/ring.png";
import resim1 from '../assets/images/1.jpeg';
import resim2 from '../assets/images/2.jpeg';
import resim3 from '../assets/images/3.jpeg';
import resim4 from '../assets/images/4.jpeg';
import resim5 from '../assets/images/5.jpeg';
import resim6 from '../assets/images/6.jpeg';
import resim7 from '../assets/images/7.jpeg';
import resim8 from '../assets/images/8.jpeg';
import resim9 from '../assets/images/9.jpeg';
import resim10 from '../assets/images/10.jpeg';
import resim11 from '../assets/images/11.jpeg';
import resim12 from '../assets/images/12.jpeg';
import resim13 from '../assets/images/13.jpeg';
import resim14 from '../assets/images/14.jpeg';
import resim15 from '../assets/images/15.jpeg';
import resim16 from '../assets/images/16.jpeg';
import resim17 from '../assets/images/17.jpeg';
import resim18 from '../assets/images/18.jpeg';
import resim19 from '../assets/images/19.jpeg';
import resim20 from '../assets/images/20.jpeg';
import resim21 from '../assets/images/21.jpeg';
import resim22 from '../assets/images/22.jpeg';
import resim23 from '../assets/images/23.jpeg';
import resim24 from '../assets/images/24.jpeg';
import resim25 from '../assets/images/25.jpeg';
import resim26 from '../assets/images/26.jpeg';
import resim27 from '../assets/images/27.jpeg';
import resim28 from '../assets/images/28.jpeg';
import resim29 from '../assets/images/29.jpeg';
import resim30 from '../assets/images/30.jpeg';
import resim31 from '../assets/images/31.jpeg';
import resim32 from '../assets/images/32.jpeg';
import resim33 from '../assets/images/33.jpeg';
import resim34 from '../assets/images/34.jpeg';
import resim35 from '../assets/images/35.jpeg';
import resim36 from '../assets/images/36.jpeg';
import resim37 from '../assets/images/37.jpeg';
import resim38 from '../assets/images/38.jpeg';
import resim39 from '../assets/images/39.jpeg';
import resim40 from '../assets/images/40.jpeg';
import resim41 from '../assets/images/41.jpeg';
import resim42 from '../assets/images/42.jpeg';
import resim43 from '../assets/images/43.jpeg';
import resim44 from '../assets/images/44.jpeg';
import resim45 from '../assets/images/45.jpeg';
import resim46 from '../assets/images/46.jpeg';
import resim47 from '../assets/images/47.jpeg';
import resim48 from '../assets/images/48.jpeg';
import resim49 from '../assets/images/49.jpeg';
import resim50 from '../assets/images/50.jpeg';
import resim51 from '../assets/images/51.jpeg';
import resim52 from '../assets/images/52.jpeg';
import resim53 from '../assets/images/53.jpeg';
import resim54 from '../assets/images/54.jpeg';
import resim55 from '../assets/images/55.jpeg';
import resim56 from '../assets/images/56.jpeg';
import resim57 from '../assets/images/57.jpeg';
import resim58 from '../assets/images/58.jpeg';
import resim59 from '../assets/images/59.jpeg';
import resim60 from '../assets/images/60.jpeg';
import resim61 from '../assets/images/61.jpeg';
import resim62 from '../assets/images/62.jpeg';
import resim63 from '../assets/images/63.jpeg';

const images = [
  resim1, resim2, resim3, resim4, resim5, resim6, resim7, resim8,
  resim9, resim10, resim11, resim12, resim13, resim14, resim15, resim16,
  resim17, resim18, resim19, resim20, resim21, resim22, resim23, resim24,
  resim25, resim26, resim27, resim28, resim29, resim30, resim31, resim32,
  resim33, resim34, resim35, resim36, resim37, resim38, resim39, resim40,
  resim41, resim42, resim43, resim44, resim45, resim46, resim47, resim48,
  resim49, resim50, resim51, resim52, resim53, resim54, resim55, resim56,
  resim57, resim58, resim59, resim60, resim61, resim62, resim63
];
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
