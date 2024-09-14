import React from 'react'
import { useState } from 'react';
import "../../../locales/localStorage"
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
export default function page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Product 1', price: 100, quantity: 2, imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 150, quantity: 1, imageUrl: '/images/product2.jpg' },
  ]);

  // Tính tổng tiền giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Thay đổi số lượng sản phẩm
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Xóa hết sản phẩm khỏi giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <div className="p-4">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300"
                    >
                      +
                    </button>
                  </td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2">${item.price * item.quantity}</td>
                  <td className="p-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-2 py-1"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h2>Total: ${getTotalPrice()}</h2>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 mt-4"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
