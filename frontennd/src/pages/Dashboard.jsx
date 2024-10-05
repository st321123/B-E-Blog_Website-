import React from 'react'

import { Allpost } from '../components/Allpost'
import { useLocation, useNavigate } from 'react-router';

export  function Dashboard() {
    const location = useLocation();

    // console.log(location.pathname);
    
    
    const navigator = useNavigate();
    // console.log("This is size of local ",localStorage.length);

    
    // const id = localStorage.getItem("_id");
    // console.log("thi si sid ",id);
    
  return (
    <div className=' h-screen'>
        
        <Allpost/>
    </div>
  )
}
