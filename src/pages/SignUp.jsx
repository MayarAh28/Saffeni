import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import LoginImage from "/LoginImage.png";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordConfiremd, setIsPasswordConfiremd] = useState(true);
  function handleSignUp(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordConfiremd(false);
      return;
    }
    const user = {
      first_name: firstName,
      last_name :lastName,
      username: userName,
      email,
      password,
      phone_number: phoneNumber,
    };
    axios
      .post("http://127.0.0.1:8000/userManagement/register/", user)
      .then((res) => {console.log(res.data)
        navigate('/login',{state: {successMessage: "تم إنشاء الحساب بنجاح ! يمكنك الآن تسجيل الدخول."}});
      })
      .catch((err) => console.error(err.response.data));
  }

  return (
    <div className="bg-[#fafafa]">
      <Header />
      <div className="container mx-auto mt-[62px] flex justify-center items-center min-h-[91vh] w-full px-3 ">
        <div className="login w-full min-h-full p-10 flex flex-col md:w-1/2">
          <h3 className="text-primary-dark text-3xl font-bold text-center">
            إنشاء حساب
          </h3>
          <form action="" className="mt-7 w-full" onSubmit={handleSignUp}>
            <label htmlFor="" className="mb-2 block">
              الاسم الأول
            </label>
            <input
              type="text"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="ادخل اسمك الأول"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="" className="mb-2 block">
              الاسم الأخير
            </label>
            <input
              type="text"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="ادخل اسمك الأخير"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="" className="mb-2 block">
              اسم المستخدم
            </label>
            <input
              type="text"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="ادخل اسم المستخدم"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label htmlFor="" className="mb-2 block">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="ادخل بريدك الإلكتروني"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="" className="mb-2 block">
              رقم الموبايل
            </label>
            <input
              type="text"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="ادخل رقم الموبايل"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <label htmlFor="" className="mb-2 block">
              كلمة المرور
            </label>
            <input
              type="password"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="اكتب كلمة المرور"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="" className="mb-2 block">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              className="bg-white rounded-2xl py-2.5 px-3.5 w-full mb-3 outline-primary-light"
              placeholder="اكتب تأكيد كلمة المرور"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {isPasswordConfiremd ? null : (
              <p className="p-2 bg-red-300 text-red-700 font-bold mb-3 rounded-md">
                كلمة السر غير متطابقة !
              </p>
            )}

            <Button
              className="w-full mb-3 bg-secondary-dark hover:bg-secondary-light"
              disabled={email && password ? false : true}
            >
              إنشاء حساب
            </Button>
          </form>
        </div>
        <div className="image hidden md:w-1/2 md:block">
          <img src={LoginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
