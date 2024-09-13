import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
export default function page() {
  const [products, setProducts] = useState<Product[]>([]);

  // Giả lập dữ liệu hoặc gọi API lấy danh sách sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    
    fetchProducts();
  }, []);
       
  return (
    <div>
      <h1>Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
