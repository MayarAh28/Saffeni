import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "/PrimaryLogo.png";
import React, { useState, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useMemo(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="absolute bg-white container mx-auto z-50 shadow-md top-0 left-0 flex items-center justify-between px-6 py-2 md:px-16 min-w-screen">
      <div className="logo">
        <img src={Logo} alt="Logo" className="w-20" />
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
        {user ? (
          <>
            <span className="text-primary-dark font-bold py-2 px-3">
              أهلاً، {user.username}
            </span>
            <Button
              onClick={handleLogout}
              className="bg-secondary-dark text-primary-dark font-bold hover:bg-secondary-light"
            >
              تسجيل خروج
            </Button>
          </>
        ) : (
          <>
            <Button className="bg-secondary-dark text-primary-dark font-bold hover:bg-secondary-light">
              <Link to="/login">تسجيل دخول</Link>
            </Button>
            <Button variant="ghost" className="font-bold text-primary-dark">
              <Link to="/signup">تسجيل</Link>
            </Button>
          </>
        )}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-3xl text-primary-dark cursor-pointer"
        />
      </button>

      {/* القائمة الجانبية للموبايل */}
      {isOpen && (
        <nav className="absolute w-full top-[61px] left-0 text-center md:hidden bg-white">
          <ul>
            <li className="py-2 border-b border-b-primary-dark">الرئيسية</li>
            <li className="py-2 border-b border-b-primary-dark">حجوزاتي</li>
            <li className="py-2 border-b border-b-primary-dark">وجهاتنا</li>
            <li className="py-2 border-b border-b-primary-dark">اتصل بنا</li>
            {user ? (
              <>
                <li className="py-2 border-b border-b-primary-dark">
                  أهلاً، {user.username}
                </li>
                <li className="py-2 border-b border-b-primary-dark">
                  <button onClick={handleLogout}>تسجيل خروج</button>
                </li>
              </>
            ) : (
              <>
                <li className="py-2 border-b border-b-primary-dark">
                  <Link to="/login">تسجيل دخول</Link>
                </li>
                <li className="py-2 border-b border-b-primary-dark">
                  <Link to="/signup">تسجيل</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;