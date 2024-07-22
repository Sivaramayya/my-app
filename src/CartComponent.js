
import React, { useState } from 'react';

const CartComponent = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const handleAddToCart = () => {
    if (selectedItem) {
      setCart([...cart, selectedItem]);
      setItems(items.filter(item => item !== selectedItem));
      setSelectedItem(''); 
    }
  };

  return (
    <div >
      <h1>Shopping Cart</h1>
      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option value="" disabled>Select an item</option>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button onClick={handleAddToCart} disabled={!selectedItem}>
        Add to Cart
      </button>
      <h2>Cart Items</h2>
      <ul>
        {cart.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
