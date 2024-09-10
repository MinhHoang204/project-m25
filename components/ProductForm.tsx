import React, { useState,useEffect } from 'react'
import { addProduct, updateProduct, Product } from '../services/productService';
interface Props {
    selectedProduct: Product | null;
    onSave: () => void;
}
export default function ProductForm(selectedProduct:any, onSave:any) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
      setDescription(selectedProduct.description);
    } else {
      setName('');
      setPrice(0);
      setDescription('');
    }
  }, [selectedProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || price <= 0) return alert('Please enter valid data!');

    const product = selectedProduct
      ? { ...selectedProduct, name, price, description }
      : { id: Date.now(), name, price, description };

    if (selectedProduct) {
      await updateProduct(product);
    } else {
      await addProduct(product);
    }

    onSave();
  };
  return (
    <div>
      <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
