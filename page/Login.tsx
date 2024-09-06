import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      // Thêm logic xác thực ở đây, ví dụ gọi API
      if (username === 'admin' && password === 'password') {
        // Đăng nhập thành công, chuyển hướng tới trang admin
        router.push('/admin/dashboard');
      } else {
        alert('Invalid credentials');
      }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};
