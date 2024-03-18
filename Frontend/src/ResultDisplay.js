// src/ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div>
      <h2>Best Petshop: {result.bestPetshop}</h2>
      <p>Total Price: R${result.totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ResultDisplay;
