import React from 'react'
import { useState } from 'react';
interface AddUserForm {
    onAddUser: (newUser: { name: string; email: string }) => void;
}
export default function AddUserForm(onAddUser:any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser({ name, email });
    setName('');
    setEmail('');
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
    <h2 className="text-xl font-bold mb-4">Add New User</h2>
    <div className="mb-4">
      <label className="block text-gray-700">Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      Add User
    </button>
  </form>
  )
}
