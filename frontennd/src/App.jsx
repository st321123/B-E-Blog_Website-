import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Signin} from "./pages/Sigin"
import {Dashboard} from"./pages/Dashboard";
import {Signup} from "./pages/Signup"
import { FullPost } from './pages/FullPost';
import {CreatePost} from "./pages/CreatePost";
import { PostCreatedSuccess } from './pages/PostCreatedSucess';
import { AppBar } from './components/AppBar';
import { Profile } from './pages/Profile';

// import {NotFound} from "./pages/NotFound";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div>
     
     
    <BrowserRouter> 
    <AppBar />
    <Routes>
      <Route path='/' element={user ? <Dashboard /> : <Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element ={<Signin />}/>
      <Route path='/user-dashboard' element={<Dashboard  />} />
      <Route path='/full-post/:id' element={<FullPost/>} />
      <Route path='/profile' element = {<Profile />}/>
      
      <Route path='/create-post' element={<CreatePost />} ></Route> 

      <Route path='post-created-sucess' element = {<PostCreatedSuccess />}></Route>
      {/* <Route path = "*" element = {NotFound} ></Route> */}
    </Routes>
   
    </BrowserRouter>       
    </div>
  )
}

export default App
