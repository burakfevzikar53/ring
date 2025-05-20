// DialogBox.js - Karakter isimleri için düzenleme
import React from 'react';
import '../styles/DialogBox.css';

const DialogBox = ({ dialog }) => {
    return (
        <div className="message-box">
            <p className="character-name">{dialog.character}</p>
            <p>{dialog.text}</p>
        </div>
    );
};

export default DialogBox;
