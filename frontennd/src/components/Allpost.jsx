import React, { useEffect, useState } from 'react';
import axios from "axios";
import { PostCard } from './PostCard';
import { useLocation } from 'react-router-dom'; // React Router hook to detect location changes

export function Allpost() {
    const [posts, setPosts] = useState([]);  // State to store all posts
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const postsPerPage = 5; // Number of posts per page
    const BASE_URL = import.meta.env.VITE_API_URL;
    const location = useLocation(); // React Router hook to detect route changes

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/user`);
                // Assuming response.data.posts contains the array of posts
                console.log(response.data.posts);
                setPosts(response.data.posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
      

        fetchPosts();
    }, [location]); // Adding location to dependency array triggers re-fetch on navigation changes

    // Calculate the index of the last and first post for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // Get current posts for the page
    const totalPages = Math.ceil(posts.length / postsPerPage); // Total number of pages

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    if (!posts || posts.length === 0) {
        return (<h1>Loading...</h1>); // Handle loading state
    }

    return (
        <div className='bg-gray-100 flex flex-col items-center justify-center p-2'>
            <div className='w-full'>
                {currentPosts.map((post) => (
                    <PostCard
                        id={post._id}
                        key={post._id}
                        name={post.author.author}
                        title={post.title}
                        description={post.description}
                    />
                ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex space-x-4 mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* When there's only 1 page, display a simple message */}
            {totalPages === 1 && (
                <div className="mt-4 text-gray-500">Page 1</div>
            )}
        </div>
    );
}
