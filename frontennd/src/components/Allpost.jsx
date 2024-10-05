import React, { useEffect, useState } from 'react';
import axios from "axios";
import { PostCard } from './PostCard';

export function Allpost() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [totalPages, setTotalPages] = useState(0); // Total number of pages
    const postsPerPage = 5; // Number of posts per page
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _limit: postsPerPage,
                        _page: currentPage, // Fetch posts for the current page
                    }
                });
                setPosts(response.data);
                // The total number of posts is in the response headers (X-Total-Count)
                const totalPosts = response.headers['x-total-count'];
                setTotalPages(Math.ceil(totalPosts / postsPerPage));
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, [currentPage]); // Re-fetch posts when currentPage changes

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
                {posts.map((post) => (
                    <PostCard
                        id={post.id}
                        key={post.id}
                        userId={post.userId}
                        title={post.title}
                        description={post.body}
                    />
                ))}
            </div>
            
            {/* Pagination Controls */}
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
        </div>
    );
}
