import { useEffect, useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Tải giỏ hàng từ localStorage khi trang được tải
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Lưu giỏ hàng vào localStorage mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
}