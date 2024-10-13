import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function PostCard({ name, title, description, id }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle between full and short description
  
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Limit the description to 100 characters if not expanded
  const shortDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <div className="border rounded-lg m-4 p-4 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-gray-50 via-white to-gray-100 max-w-xl mx-auto transition-all duration-300 ease-in-out">
      <Link to={`/full-post/${id}`} className="no-underline">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-700 text-lg mb-4">
          {isExpanded ? description : shortDescription}
          {description.length > 100 && (
            <span
              onClick={toggleDescription} // Toggle description on click
              className="text-blue-500 ml-2 cursor-pointer px-2 py-1 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </span>
          )}
        </p>
        <p className="text-right text-gray-500 text-sm mt-4">
          <span className="inline-block bg-blue-50 text-blue-600 font-semibold px-2 py-1 rounded-full shadow-sm">
            Posted by: {name}
          </span>
        </p>
      </Link>
    </div>
  );
}
