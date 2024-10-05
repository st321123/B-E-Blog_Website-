import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Import PostCard component for displaying posts
import { ProfilePostCard } from '../components/ProfilePostCard'; 

export function Profile() {
  
  const [posts, setPosts] = useState([]);
  const id = localStorage.getItem('_id'); // Assume the user ID is stored in localStorage
  const user = localStorage.getItem("user");
  const BASE_URL =  import.meta.env.VITE_API_URL || 'http://localhost:3000';
  useEffect(() => {
    // Fetch user's posts
    const fetchUserPosts = async () => {
      try {
        // console.log("Fetching posts for user ID:", id);
        
        // Make a GET request to fetch user's posts
        const userResponse = await axios.get(`${BASE_URL}/user-posts`, {
          params: { id } // Pass the user ID as a query parameter
        });
        
        // console.log("User posts response:", userResponse.data);
        setPosts(userResponse.data.db); // Assuming 'db' contains the posts array

      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    if (id) { // Check if ID exists before fetching
      fetchUserPosts();
    }
  }, [id]);

  if (!user) {
    return <h1>Loading...</h1>; // Handle loading state if user is not found
  }

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">{user}'s Profile</h1>
      <p className="text-lg">Posts Created: {posts.length}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">All Posts:</h2>
        <div className="grid grid-cols-1 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <ProfilePostCard key={post._id} id={post._id} title={post.title} description={post.description} />
            ))
          ) : (
            <p>No posts created by this user.</p>
          )}
        </div>
      </div>
    </div>
  );
}
