import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Importing the user icon from react-icons

export function NavBar() {
  const user = typeof window !== 'undefined' ? localStorage.getItem("user") : null;
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent default link behavior
    localStorage.removeItem("userId");
    localStorage.removeItem("user"); // Remove the user as well
    navigate("/signin"); // Redirect to signin page
  };

  const isAuthPage = !!user;

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="text-white text-3xl font-extrabold">
          B&E
        </div>

        {/* Right side - Navigation Links */}
        {isAuthPage && ( // Only render the right-side links if user is logged in
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Home Link */}
            <Link 
              to="/user-dashboard" 
              className="text-white text-sm md:text-lg font-medium hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center h-10 md:h-12 px-3 md:px-4 rounded-md">
              Home
            </Link>

            {/* Create Profile */}
            <Link 
              to="/create-post" 
              className="text-white text-sm md:text-lg font-medium hover:text-yellow-400 transition-all duration-300 ease-in-out transform flex items-center justify-center h-10 md:h-12 px-3 md:px-4 rounded-md">
              Create
            </Link>

            {/* Profile */}
            <Link 
              to="/profile" 
              className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 ease-in-out transform h-10 md:h-12 px-3 md:px-4 rounded-md">
              <div 
                className="flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white font-bold border-2 border-white">
                {user && user[0]} {/* Display the first character of the username */}
              </div>
              <span className="text-sm md:text-lg font-medium flex items-center">
                <FaUser className="mr-1 md:mr-2 text-sm md:text-lg" /> {/* Smaller User icon */}
                {user && user}
              </span>
            </Link>

            {/* Logout */}
            <Link
              to="/signin"
              onClick={handleLogout}
              className="text-white text-sm md:text-lg font-medium hover:text-yellow-400 transition-all duration-300 ease-in-out transform flex items-center justify-center h-10 md:h-12 px-3 md:px-4 rounded-md">
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
