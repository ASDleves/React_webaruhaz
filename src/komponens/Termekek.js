// Termekek.js
import React from 'react';
import { KUTYALISTA } from './Termek';

const Termekek = ({ onAddToCart }) => {
  return (
    <div className="termekek-container">
      {KUTYALISTA.map((kutya, index) => (
        <div key={index} className="kutya-card">
          <img src={kutya.kep} alt={kutya.neve} />
          <h3>{kutya.neve}</h3>
          <p>Fajtája: {kutya.fajtaja}</p>
          <p>Kora: {kutya.kora} év</p>
          <p>Ár: {kutya.ar}</p>
          <button onClick={() => onAddToCart(kutya)}>Kosárba tesz</button>
        </div>
      ))}
    </div>
  );
}

export default Termekek;
