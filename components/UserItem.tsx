import React from 'react'
interface UserItem {
    user: {
      id: number;
      name: string;
      email: string;
      isLocked: boolean;
    };
    onToggleStatus: (id: number) => void;
}
export default function UserItem(user:any, onToggleStatus:any) {
  return (
    <tr className="border-b">
      <td className="py-2 px-4">{user.id}</td>
      <td className="py-2 px-4">{user.name}</td>
      <td className="py-2 px-4">{user.email}</td>
      <td className="py-2 px-4">
        {user.isLocked ? (
          <span className="text-red-500">Locked</span>
        ) : (
          <span className="text-green-500">Active</span>
        )}
      </td>
      <td className="py-2 px-4">
        <button
          className={`px-4 py-2 rounded ${
            user.isLocked ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
          onClick={() => onToggleStatus(user.id)}
        >
          {user.isLocked ? 'Unlock' : 'Lock'}
        </button>
      </td>
    </tr>
  )
}
