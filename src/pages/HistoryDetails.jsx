import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// تأكد من مسارات الصور والأيقونات
import PlantIcon from "../assets/PlantDiseaseDetection.png";
import WheatImage from "../assets/wheatleaf.png";
import RiceImage from "../assets/riceleaf.png";
import CommentIcon from "../assets/comment.png";
import RemoveIcon from "../assets/Remove.png";

const HistoryDetails = () => {
  const historyItems = [
    {
      id: 1,
      text: "You have uploaded a picture of a wheat leaf.\nThe plant is diseased.\nRecommendation: Apply a mild fungicide and remove infected leaves to prevent spreading.",
      date: "Apr 26, 2024, 10:45 AM",
      img: WheatImage,
    },
    {
      id: 2,
      text: "You have uploaded a picture of a rice leaf.\nThe plant is not diseased.",
      date: "May 2, 2024, 6:04 PM",
      img: RiceImage,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FEF4] font-['Inter']">
      <Navbar />

      <main className="flex-grow flex flex-col items-center pt-8 pb-20 px-4">
        <h1 className="text-[36px] font-bold text-[#683A2F] mb-2 text-center">
          Activity History
        </h1>
        <p
          className="text-[#1E1E1E] mb-12 text-center"
          style={{ fontSize: "18px", fontWeight: "600" }}
        >
          Let’s Get You Growing!
        </p>

        {/* الكونتينر الرئيسي */}
        <div
          className="w-full max-w-[650px] flex flex-col items-start"
          style={{ marginBottom: "100px" }}
        >
          {/* 1. مربع العنوان */}
          <div
            className="flex items-center gap-6 pl-10 pr-4 py-5 rounded-[15px] shadow-sm"
            style={{
              backgroundColor: "#E6D0C5",
              width: "320px",
              height: "90px",
              marginBottom: "35px",
              color: "#FFFFFF",
            }}
          >
            <img
              src={PlantIcon}
              alt="icon"
              className="w-[28px] h-[28px] object-contain opacity-70"
            />

            <span className="font-bold text-[20px]">
              Plant Disease Detection
            </span>
          </div>

          {/* 2. الصندوق الكبير (الخلفية البيج) */}
          <div
            className="w-full rounded-[30px] p-8 flex flex-col items-center shadow-md"
            style={{
              backgroundColor: "#EEE4DA",
              minHeight: "400px",
            }}
          >
            <h2 className="text-white font-bold text-[28px] mb-8 drop-shadow-sm mt-2">
              Your history
            </h2>

            {/* قائمة الكروت */}
            <div className="w-full flex flex-col mb-4">
              {historyItems.map((item) => (
                <div
                  key={item.id}
                  className="p-8 flex justify-between items-start"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    marginBottom: "30px",
                    minHeight: "100px",
                  }}
                >
                  {/* الجزء الشمال */}
                  <div className="flex gap-4 flex-1">
                    <img
                      src={CommentIcon}
                      alt="comment"
                      className="w-[28px] h-[28px] object-contain shrink-0 mt-1"
                    />

                    <div className="flex flex-col w-full pr-2">
                      <p className="text-[#5D4037] text-[12px] font-bold leading-relaxed whitespace-pre-line mb-3">
                        {item.text}
                      </p>
                      <span className="text-[#4CAF50] text-[10px] font-bold text-right w-full block">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* الجزء اليمين */}
                  <div className="flex flex-col justify-between items-end ml-4 h-full">
                    <img
                      src={item.img}
                      alt="plant"
                      className="w-[90px] h-[55px] object-cover rounded-[10px]"
                    />

                    {/* زرار الحذف (السلة) */}
                    <button
                      className="mt-auto opacity-60 hover:opacity-100 transition border-none outline-none cursor-pointer p-1"
                      تحرك
                      style={{ transform: "translateY(15px)" }}
                    >
                      <img
                        src={RemoveIcon}
                        alt="delete"
                        className="w-[12px] h-[12px] object-contain"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* زرار Remove History */}
            <button className="bg-[#C62828] text-white text-[14px] font-bold py-2 px-10 rounded-[10px] hover:opacity-90 transition shadow-none border-none outline-none mt-8 mb-4">
              Remove history
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HistoryDetails;
