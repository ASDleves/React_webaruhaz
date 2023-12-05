import React, { useState } from 'react';
import './App.css';
import Termekek from './komponens/Termekek'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (kutya) => {
    setCart(currentCart => [...currentCart, kutya]);
  };
  const removeFromCart = (indexToRemove) => {
    setCart(currentCart => currentCart.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div className="App">
      <header className="App-header">Webáruház</header>
      <article className="App-article">
        <Termekek onAddToCart={addToCart} />
      </article>
      <aside className="App-aside">
      {cart.map((kutya, index) => (
    <div key={index} className="kutya-card">
      <img src={kutya.kep} alt={kutya.neve} />
      <h3>{kutya.neve}</h3>
      <p>Fajtája: {kutya.fajtaja}</p>
      <p>Kora: {kutya.kora} év</p>
      <p>Ár: {kutya.ar}</p>
      <button onClick={() => removeFromCart(index)}>Visszavon</button>
    </div>
  ))}
      </aside>
      <footer className="App-footer">Bella Richárd</footer>
    </div>
  );
}


export default App;
