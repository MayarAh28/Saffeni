import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "/PrimaryLogo.png";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute bg-white container mx-auto z-50 shadow-md top-0 left-0  flex items-center justify-between px-6 py-2 md:px-16 min-w-screen">
      <div className="logo">
        <img src={Logo} alt="" className="w-20" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-1">
          <li className="font-bold text-primary-dark py-2 px-2.5 hover:text-primary-light cursor-pointer">
            الرئيسية
          </li>
          <li className="font-bold text-primary-dark py-2 px-2.5 hover:text-primary-light cursor-pointer">
            وجهاتنا
          </li>
          <li className="font-bold text-primary-dark py-2 px-2.5 hover:text-primary-light cursor-pointer">
            حجوزاتي
          </li>
          <li className="font-bold text-primary-dark py-2 px-2.5 hover:text-primary-light cursor-pointer">
            اتصل بنا
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex gap-2">
        <Button className="bg-secondary-dark text-primary-dark font-bold hover:bg-secondary-light">
          <Link to="/login">
          تسجيل دخول
          </Link>
        </Button>
        <Button variant="ghost" className="font-bold text-primary-dark">
          تسجيل
        </Button>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl text-primary-dark cursor-pointer"
        />
      </button>
      {isOpen && (
        <nav className="absolute w-full top-[61px] left-0 text-center md:hidden bg-white">
          <ul>
            <li className="py-2 border-b-1 border-b-primary-dark">
              <a href="">الرئيسية</a>
            </li>
            <li className="py-2 border-b-1 border-b-primary-dark">
              <a href="">حجوزاتي</a>
            </li>
            <li className="py-2 border-b-1 border-b-primary-dark">
              <a href="">وجهاتنا</a>
            </li>
            <li className="py-2 border-b-1 border-b-primary-dark">
              <a href="">اتصل بنا</a>
            </li>
            <li className="py-2 border-b-1 border-b-primary-dark">
              <a href="">تسجيل دخول</a>
            </li>
            <li className="py-2 border-b-1 border-b-primary-dark">
              <a href="">تسجيل</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
