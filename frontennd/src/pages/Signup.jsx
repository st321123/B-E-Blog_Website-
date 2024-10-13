import {Header} from "../components/Header"
import {Button} from "../components/Button"
import {InputBox} from "../components/Input"
import {SubHeading} from "../components/SubHeading"
import {BottomWarning} from '../components/BottomWarning'
import { useState } from "react"
import axios from "axios"
export function Signup(){

const [author, setAuthor] = useState("");
const [email, setemail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");



 const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';


return(
    <div className="flex  h-screen justify-center bg-slate-300" style={{ height: 'calc(100vh - 76px)' }}>
       
       <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
   <Header label={"Sign up"}/>
   <SubHeading  label={"Enter your details to create an account"} />
   
   <InputBox onChange= {(e)=>{
    setAuthor(e.target.value);
   }} placeholder={"Enter your name"} type= {"Doe"} label={"Author Name"} required={"true"} value={author} name="author"/>
   <InputBox onChange= {(e)=>{
    setemail(e.target.value);
   }} placeholder={"Enter your email"} type= {"shubham@gmail.com"} label={"Email Id"}  value={email} name="email"/>
   <InputBox onChange= {(e)=>{
    setPassword(e.target.value);
   }} placeholder={"Enter your password"} type= {"password"} label={"Password"}  value={password} name="password"/>


   <Button onClick = { async ()=>{
  
    
    try{

     const response = await axios.post(`${BASE_URL}/signup`,{
        author,email,password
    })
    
       
        setAuthor("");
        setemail("");
        setPassword("");
        setError("");


    }
    catch(er)
    {
        setError("Please enter valid email and password")
        // console.log("invalild ");
        
    }
        
        
    }} label ={"Signup"} />
    <div className="text-red-500">
        {error && <p>{error}</p>}
    </div>
   <div>
    <BottomWarning label= {"Already have an account?"} buttonText = {"Sign in"} to= {"/signin"}  but/>
   </div>

   </div>
   </div>
    </div>
)
}
