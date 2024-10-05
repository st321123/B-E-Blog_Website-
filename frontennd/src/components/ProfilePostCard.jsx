import React from 'react';

export function ProfilePostCard({ id, title, description, createdAt }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      {createdAt && (
        <p className="text-gray-500 text-sm mt-2">Created at: {new Date(createdAt).toLocaleDateString()}</p>
      )}
      <div className="mt-4">
      {/* < FullPostCard  className="text-blue-500 hover:underline"/> */}
        <a href={`/profile`} className="text-blue-500 hover:underline">Read More</a>
      </div>
    </div>
  );
}
