import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FullPostCard } from '../components/FullPostCard';


export  function FullPost() {
    const [data,setData] = useState([]);
    const { id } = useParams();
    // const BASE_URL =   import.meta.env.VITE_API_URL || 'http://localhost:3000';
    
    
    useEffect(()=>{
       const dataa =  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((val)=>{
       
        
        setData(val.data);
       })
    },[id])

   if(data.length === 0)
   {
    return(<h1>Loading....</h1>)
   }
   
   
   
   
  return (

    <div className=' h-screen flex flex-col '>
    
         <FullPostCard id = {data.id} key = {data.id} userId={data.userId} title={data.title} description={data.body} />
      
    </div>
  )
}
