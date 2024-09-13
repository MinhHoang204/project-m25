import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}
export default function page() {
  const router = useRouter();
  const { id } = router.query; // Lấy id từ URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;
  return (
    <div className="p-4">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}
