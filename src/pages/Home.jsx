import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7FEF4]">
      {/* النافبار */}
      <Navbar />

      {/* مساحة فاضية (Main) بتاخد باقي الطول عشان تزق الفوتر تحت */}
      <main className="flex-grow">
        {/* مفيش أي محتوى هنا زي ما طلبت */}
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Home;