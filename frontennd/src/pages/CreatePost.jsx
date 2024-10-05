// CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function CreatePost() {
    const author_id = localStorage.getItem("_id")
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [success, setSuccess] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const BASE_URL =  import.meta.env.VITE_API_URL || 'http://localhost:3000';
  
    const handleSubmit = async (event) => {
        event.preventDefault();

      
        // console.log(author_id,title,description);
        
        
        try {
              const response = await axios.post("http://localhost:3000/createPost",{
                author_id:author_id,
                title: title,
                description:description
            })

            if(response)
            {
                navigate('/post-created-sucess');
                
                
            }
            // console.log(response);
            
            setTitle("");
            setDescription("");
            setError("");
            setSuccess(true)
        }
        catch(e){
            setError(e);
        }
              };
       
    return (
        <div>
         
        <div className="flex justify-center bg-slate-300" style={{ height: 'calc(100vh - 88px)' }}>
           
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-4 h-max px-4">
                    <h1 className="text-2xl font-bold">Create a Post</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-left mb-2" htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter post title"
                                className="border border-gray-300 rounded w-full p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-left mb-2" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter post description"
                                className="border border-gray-300 rounded w-full p-2"
                                rows="4"
                                required
                            />
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-left mb-2" htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                onChange={handleImageChange}
                                accept="image/*" // Accept only image files
                                className="border border-gray-300 rounded w-full p-2"
                            />
                        </div> */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
