import React from 'react';
import { Link } from 'react-router-dom';

export function PostCard({ userId, title, description, id }) {
  return (
    <div className="border rounded-lg m-4 p-4 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-gray-50 via-white to-gray-100 max-w-xl mx-auto">
      <Link to={`/full-post/${id}`} className="no-underline">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-700 text-lg mb-4">{description}</p>
        <p className="text-right text-gray-500 text-sm">Posted by: {userId}</p>
      </Link>
    </div>
  );
}
