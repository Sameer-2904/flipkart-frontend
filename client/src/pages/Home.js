import React, { useEffect, useState } from 'react';
import API from '../api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}