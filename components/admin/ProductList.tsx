import React from 'react'
import { useState,useEffect } from 'react';
import { getProducts, deleteProduct, Product } from '../../services/productService';

interface Props {
    onEdit: (product: Product) => void;
}
  
export default function ProductList(onEdit:any) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      loadProducts();
    }
  };
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => onEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
