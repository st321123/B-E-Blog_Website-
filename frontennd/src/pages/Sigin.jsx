import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { InputBox } from "../components/Input";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function Signin({ setUser }) {
  const [error, SetError] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const BASE_URL = https://b-e-blog-website-z1k8.vercel.app || 'http://localhost:3000';

    
    
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
                    localStorage.setItem("_id", e.data._id);
                    localStorage.setItem("user", e.data.user);
                    navigator("/user-dashboard");
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
