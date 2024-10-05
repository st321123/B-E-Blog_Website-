import React from 'react';

export function FullPostCard({ userId, title, description, image, id }) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 mx-auto my-8 w-full max-w-4xl  hover:shadow-2xl hover:scale-105">
      
      <div className="w-full mb-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 leading-tight">
          {title}
        </h1>

        {/* Conditionally render the image only if the "image" prop is provided */}
        {image && (
          <div className="w-full flex justify-center">
            <img 
              src={image} 
              alt="Post Image" 
              className="w-full max-w-md rounded-md object-cover shadow-md  hover:scale-110"
            />
          </div>
        )}
      </div>

      <p className="text-lg text-gray-700 leading-relaxed text-center px-6 mb-8">
        {description}
      </p>

      <div className="w-full text-right mt-auto">
        <p className="text-sm font-medium text-gray-600 italic">Author: {userId}</p>
      </div>
    </div>
  );
}
