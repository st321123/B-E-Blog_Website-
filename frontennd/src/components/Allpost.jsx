import React, { useEffect, useState } from 'react';
import axios from "axios";
import { PostCard } from './PostCard';
<<<<<<< HEAD
import LoadingSpinner from './Loading';

export function Allpost() {
    const [posts, setPosts] = useState([]);  // State to store all posts
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [postsPerPage] = useState(6); // You can change this value to set how many posts per page
  
    const BASE_URL = import.meta.env.VITE_API_URL;
=======
import { useLocation } from 'react-router-dom'; // React Router hook to detect location changes

export function Allpost() {
    const [posts, setPosts] = useState([]);  // State to store all posts
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const postsPerPage = 5; // Number of posts per page
    const BASE_URL = import.meta.env.VITE_API_URL;
    const location = useLocation(); // React Router hook to detect route changes
>>>>>>> 178399d59b5e3c79d857fcd74150e6b24b3b9db9

    useEffect(() => {
        const fetchPosts = async () => {
            try {
<<<<<<< HEAD
                const response = await axios.get(`${BASE_URL}/allPost`, {
                    params: {
                        page: currentPage,
                        limit: postsPerPage
                    }
                });

                setPosts(response.data.posts);
                setTotalPosts(response.data.totalPosts); // Set total posts
=======
                const response = await axios.get(`${BASE_URL}/user`);
                // Assuming response.data.posts contains the array of posts
                console.log(response.data.posts);
                setPosts(response.data.posts);
>>>>>>> 178399d59b5e3c79d857fcd74150e6b24b3b9db9
            } catch (error) {
                // Handle error
                console.error("Error fetching posts:", error);
            }
        };
      

        fetchPosts();
<<<<<<< HEAD
    }, [currentPage, postsPerPage]); // Fetch posts when currentPage or postsPerPage changes
=======
    }, [location]); // Adding location to dependency array triggers re-fetch on navigation changes

    // Calculate the index of the last and first post for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // Get current posts for the page
    const totalPages = Math.ceil(posts.length / postsPerPage); // Total number of pages
>>>>>>> 178399d59b5e3c79d857fcd74150e6b24b3b9db9

    const updateLikeCount = (postId, newLikeCount) => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post._id === postId ? { ...post, likeCount: newLikeCount } : post
            )
        );
    };

    if (!posts || posts.length === 0) {
        return (<LoadingSpinner/> ); // Handle loading state
    }
  
    
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
        <div className='bg-gray-100 flex flex-col items-center justify-center p-2'>
            <div className='w-full'>
                {currentPosts.map((post) => (
                    <PostCard
                        id={post._id}
                        key={post._id}
                        name={post.author.userName}
                        title={post.title}
                        description={post.description}
                        likeCount={post.likeCount}
                        updateLikeCount={updateLikeCount}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                >
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
