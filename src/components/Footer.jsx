import React from "react";
import logo from "../assets/logo.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import twitterIcon from "../assets/Twitter.png";

const Footer = () => {
  return (
    <footer className="w-full font-['Inter']">
      {/* الجزء العلوي */}
      <div className="bg-[#F7FEF4] border-t border-gray-100 py-20 px-10">
        <div className="max-w-[1440px] mx-auto flex flex-row justify-between items-start gap-24">
          {/* العمود 1 */}
          <div className="w-[30%]">
            <img
              src={logo}
              alt="GreenMind Logo"
              style={{ width: "55px", height: "auto" }}
              className="mb-6 object-contain"
            />

            <div className="text-[#4B4B4B] text-[18px] leading-[32px] font-normal">
              <p className="mb-6 max-w-[300px]">
                Supporting smart and sustainable agriculture.
              </p>
              <p className="max-w-[300px]">
                Providing seeds, soil, and reliable growing solutions for all.
              </p>
            </div>
          </div>

          {/* العمود 2: Pages */}
          <div
            className="w-[18%] flex flex-col items-center"
            style={{ transform: "translateX(-90px)" }}
          >
            <h3 className="text-[#683A2F] text-[24px] font-bold mb-8">Pages</h3>

            <ul className="list-none pl-0 m-0 flex flex-col items-center">
              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  Home
                </a>
              </li>

              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/features"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  Features
                </a>
              </li>

              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/products"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  Products
                </a>
              </li>

              {/* --- هنا ضفنا لينك History --- */}
              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/history"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  History
                </a>
              </li>
              {/* ----------------------------- */}

              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/reviews"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  Reviews
                </a>
              </li>

              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/why-us"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  Why Us
                </a>
              </li>

              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/about"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-semibold text-[18px]"
                >
                  About Us
                </a>
              </li>

              <li style={{ marginBottom: "30px" }}>
                <a
                  href="/articles"
                  className="text-[#683A2F] no-underline hover:text-[#4CAF50] transition-colors duration-300 font-extrabold text-[18px]"
                >
                  Articles
                </a>
              </li>
            </ul>
          </div>

          {/* العمود 3 */}
          <div className="w-[25%]">
            <h3 className="text-[#683A2F] text-[24px] font-bold mb-8">
              Contact
            </h3>

            <div className="flex flex-col gap-2 text-[#4B4B4B] text-[18px] font-normal leading-[1px]">
              <p>+201023456789</p>
              <p>support@GreenMind.com</p>
              <p>Al-Kaiman, Al-Fayoum – Egypt</p>

              <div className="flex mt-4">
                <a href="#" style={{ marginRight: "27px" }}>
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    style={{ width: "35px", height: "30px" }}
                    className="object-contain hover:opacity-80 transition"
                  />
                </a>
                <a href="#" style={{ marginRight: "27px" }}>
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    style={{ width: "35px", height: "35px" }}
                    className="object-contain hover:opacity-80 transition"
                  />
                </a>
                <a href="#">
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    style={{ width: "35px", height: "35px" }}
                    className="object-contain hover:opacity-80 transition"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الجزء السفلي */}
      <div
        className="bg-[#E3D1C8] text-center w-full"
        style={{ padding: "30px 0" }}
      >
        <p
          className="text-[16px] md:text-[18px] font-normal tracking-wide"
          style={{ color: "#ffffff", margin: 0 }}
        >
          Created by{" "}
          <span style={{ color: "#683A2F", fontWeight: "bold" }}>
            GreenMind Team
          </span>{" "}
          | all rights reserved by EELU
        </p>
      </div>
    </footer>
  );
};

export default Footer;
