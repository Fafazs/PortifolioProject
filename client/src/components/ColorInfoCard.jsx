import React from 'react';
import './ColorInfoCard.css';

const ColorInfoCard = ({ colorName, colorHex, variant = 'default' }) => {

  const handleHex = ()=>{
navigator.clipboard.writeText(colorHex)
alert(`O valor ${colorHex} foi copiado para a área de transferência!`)
   
  }
  return (
    <div onClick={handleHex} className={`color-card ${variant === 'variant2' ? 'variant2' : ''}`}>
      <div className="color-info">
        <h2>{colorName}</h2>
        <p>{colorHex}</p>
      </div>
    </div>
  );
};

export default ColorInfoCard;
