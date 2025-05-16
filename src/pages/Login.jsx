import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-router";
import LoginImage from "/LoginImage.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = {
    email: "m123@gmail.com",
    password: "12345678",
  };
  const [user, setUser] = useState(userInfo);
  function handleLogin(email, password, e) {
    e.preventDefault();
    if (email === userInfo.email && password === userInfo.password) {
      console.log("Authnticated Sucessfuly 💪🏻");
    }
  }
  axios
    .get("http://127.0.0.1:8000/companies/companies/")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <div className="container mx-auto mt-[62px] flex justify-center items-center min-h-[91vh] w-full px-3 ">
        <div className="login w-full min-h-full p-10 flex flex-col md:w-1/2">
          <h3 className="text-primary-dark text-3xl font-bold text-center">
            تسجيل الدخول
          </h3>
          <form action="" className="mt-7 w-full">
            <label htmlFor="" className="mb-2 block">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="اكتب البريد الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="mb-2 block">
              كلمة المرور
            </label>
            <input
              type="password"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="اكتب كلمة المرور"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center w-full mb-3">
              <div>
                <input
                  type="checkbox"
                  id="remeber"
                  className="accent-secondary-dark"
                />
                <label htmlFor="remeber" className="mr-1.5">
                  تذكرني
                </label>
              </div>
              <Link className="text-primary-light">نسيت كلمة المرور؟</Link>
            </div>
            <Button
              className="w-full mb-3 bg-secondary-dark hover:bg-secondary-light"
              disabled={email && password ? false : true}
              onClick={(e) => handleLogin(email, password, e)}
            >
              تسجيل الدخول
            </Button>
            <p className="text-center">
              أو سجل حساب جديد,{" "}
              <Link className="font-bold text-secondary-dark">تسجيل</Link>
            </p>
          </form>
        </div>
        <div className="image hidden md:w-1/2 md:block">
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
