import React, { useContext } from 'react';
import { AuthContext } from '../context';

export default function Cart() {
  const { cart, setCart } = useContext(AuthContext);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx}>
              <img src={item.image} alt={item.name} width={80} />
              <span>{item.name} - Rs.{item.price}</span>
              <button onClick={() => handleRemove(idx)}>Remove</button>
            </div>
          ))}
          <h3>Total: Rs.{total}</h3>
        </div>
      )}
    </div>
  );
}