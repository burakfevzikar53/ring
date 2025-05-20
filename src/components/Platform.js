// src/components/Platform.js
import React from "react";
import "../styles/Platform.css";

const Platform = ({ position, width }) => {
  return (
    <div
      className="platform"
      style={{
        left: position.x,
        top: position.y,
        width: width,
      }}
    ></div>
  );
};

export default Platform;
