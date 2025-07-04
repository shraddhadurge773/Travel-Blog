import React, { useState } from 'react';
import './FlipCard.css'; // import CSS

const FlipCard = ({ image, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} className="card-image" />
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
