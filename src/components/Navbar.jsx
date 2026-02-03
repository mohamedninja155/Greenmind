import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "History", path: "/history" },
    { name: "Articles", path: "/articles" },
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Products", path: "/products" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="bg-[#E3D1C8] sticky top-0 w-full z-50 h-[100px] flex items-center justify-center font-['Inter'] shadow-sm">
      <div className="w-full max-w-[1440px] px-[56px] flex items-center justify-between">
        {/* === Logo === */}
        <div className="flex-shrink-0 cursor-pointer">
          <img
            src={logo}
            alt="GreenMind Logo"
            className="w-auto h-[60px] object-contain"
          />
        </div>

        {/* === Navigation Links === */}
        <nav className="flex items-center gap-[40px]">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.name}
                href={link.path}
                className={`text-[18px] transition-all duration-300 pb-1 border-b-2 !no-underline 
                  isActive 
                    ? "font-bold text-[#683A2F] border-[#683A2F]" 
                    : "font-medium text-[#683A2F] border-transparent hover:opacity-60" 
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* === Menu Icon === */}
        <button className="flex-shrink-0 cursor-pointer hover:opacity-70 transition bg-transparent border-none p-0">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#683A2F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
