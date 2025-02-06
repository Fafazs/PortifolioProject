import React from 'react';
import './ColorInfoCard.css';

const ColorInfoCard = ({ colorName, colorHex, variant = 'default' }) => {
  return (
    <div className={`color-card ${variant === 'variant2' ? 'variant2' : ''}`}>
      <div className="color-info">
        <h2>{colorName}</h2>
        <p>{colorHex}</p>
      </div>
    </div>
  );
};

export default ColorInfoCard;
