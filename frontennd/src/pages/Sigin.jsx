import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { InputBox } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


<<<<<<< HEAD
export function Signin() {
=======
export function Signin({ setUser }) {
>>>>>>> 178399d59b5e3c79d857fcd74150e6b24b3b9db9
  const [error, SetError] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

<<<<<<< HEAD
  const BASE_URL = import.meta.env.VITE_API_URL;
=======
  const BASE_URL = import.meta.env.VITE_API_URL ;

>>>>>>> 178399d59b5e3c79d857fcd74150e6b24b3b9db9

  

    
    
  return (
   
    <div className="flex flex-col" style={{ height: 'calc(100vh - 76px)' }}>
      
      <div className="flex flex-col items-center justify-center h-full bg-slate-300">
        <div className="rounded-lg bg-white w-80 text-center p-4">
          <Header label={"Sign in"} />
          <SubHeading label={"Enter your id password to login"} />
          <InputBox
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder={"Enter your email"}
            type={"email"} // Changed to "email" for better semantics
            label={"Email Id"}
            value={email}
            name={"email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"Enter your password"}
            type={"password"}
            label={"Password"}
            value={password}
            name={"password"}
          />
          <Button
            onClick={() => {
              axios
                .post(`${BASE_URL}/signin`, {
                  email,
                  password,
                })
                .then((e) => {
                  if (e.data.msg === "Success") {
                    // console.log("Looged in");
                    localStorage.setItem("token", e.data.token);
                    navigator("/");
                  }
                })
                .catch((error) => {
                  SetError("Please enter valid email and password");
                //   console.log("Invalid id pass");
                });
            }}
            label={"Login"}
          />

          <div className="text-red-500 mt-2">
            {error && <h1>Invalid credentials</h1>}
          </div>
          <div>
            <BottomWarning
              label={"Not have an account ?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
   
      </div>
  );
}
