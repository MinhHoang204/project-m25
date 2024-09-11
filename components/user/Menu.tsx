import React from 'react'
import { Link } from 'react-router-dom';
export default function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span>Products</span>
          <ul className="submenu">
            <li><Link to="/products/electronics">Electronics</Link></li>
            <li><Link to="/products/clothing">Clothing</Link></li>
            <li><Link to="/products/accessories">Accessories</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
