import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PlantIcon from "../assets/PlantDiseaseDetection.png";
import CropIcon from "../assets/CropRecommendation.png";
import FertilizerIcon from "../assets/FertilizerRecommendation.png";
import OrdersIcon from "../assets/MyOrders.png";

const History = () => {
  const buttons = [
    {
      title: "Plant Diease Detection",
      icon: PlantIcon,
      link: "/history-details",
    },
    { title: "Crop Recommendation", icon: CropIcon, link: "#" },
    { title: "Fertilizer Recommendation", icon: FertilizerIcon, link: "#" },
    { title: "My Orders", icon: OrdersIcon, link: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FEF4] font-['Inter']">
      <Navbar />

      <main className="flex-grow flex flex-col items-center pt-16 px-4">
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#683A2F] mb-2 text-center">
          Activity History
        </h1>

        <p
          className="text-[#1E1E1E] mb-12 text-center"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          Let’s Get You Growing!
        </p>

        {/* شبكة الكروت */}
        <div
          className="w-full max-w-[850px] px-4"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "60px",
            rowGap: "40px",
            marginBottom: "50px",
          }}
        >
          {buttons.map((btn, index) => (
            <Link
              key={index}
              to={btn.link}
              className="block w-full no-underline group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="bg-white flex items-center px-5 rounded-[15px] transition-transform duration-300 group-hover:-translate-y-2"
                style={{
                  height: "90px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                <div className="w-[50px] h-[50px] flex items-center justify-center mr-4 shrink-0">
                  <img
                    src={btn.icon}
                    alt={btn.title}
                    className="w-[35px] h-[35px] object-contain"
                  />
                </div>

                <span
                  className="text-[#683A2F]"
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  {btn.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* مربع الحذف) */}
        <div
          className="bg-white rounded-[20px] text-center"
          style={{
            width: "325px",
            height: "110px",

            marginTop: "30px",
            marginBottom: "100px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <p className="text-[#683A2F] font-bold text-[16px] mb-6">
            Do you want to remove all history records?
          </p>

          {/* (3) gap: '40px' -> دي اللي هتفصل الزرارين عن بعض  */}
          <div className="flex justify-center" style={{ gap: "40px" }}>
            <button className="bg-[#D32F2F] text-white text-[16px] font-bold py-2 px-10 rounded-[10px] hover:opacity-90 transition shadow-md">
              Confirm
            </button>
            <button className="bg-[#E8F5E9] text-[#2E7D32] text-[16px] font-bold py-2 px-10 rounded-[10px] hover:bg-[#C8E6C9] transition border border-[#C8E6C9]">
              Cancel
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default History;
