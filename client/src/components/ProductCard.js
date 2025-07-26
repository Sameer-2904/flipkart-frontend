import React, { useContext } from 'react';
import { AuthContext } from '../context';

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(AuthContext);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width={100} />
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}