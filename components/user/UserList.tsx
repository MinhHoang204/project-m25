import React from 'react'
import UserItem from './user/UserItem';
interface User {
    id: number;
    name: string;
    email: string;
    isLocked: boolean;
}
import { useState } from 'react';
export default function UserList() {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'User 1', email: 'user1@example.com', isLocked: false },
        { id: 2, name: 'User 2', email: 'user2@example.com', isLocked: true },
        { id: 3, name: 'User 3', email: 'user3@example.com', isLocked: false },
        // Thêm nhiều user khác ở đây
    ]);
    const toggleUserStatus = (id: number) => {
        setUsers(users.map(user =>
          user.id === id ? { ...user, isLocked: !user.isLocked } : user
        ));
    };
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserItem key={user.id} user={user} onToggleStatus={toggleUserStatus} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
