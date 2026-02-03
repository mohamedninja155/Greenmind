import React from "react";
import { Routes, Route } from "react-router-dom";

// استدعاء الصفحات
import Home from "./pages/Home.jsx"; 
import Features from "./pages/Features.jsx"; 
import History from "./pages/History.jsx"; // تأكد من وجود هذا السطر
import HistoryDetails from "./pages/HistoryDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      {/* صفحة الكروت الأربعة */}
      <Route path="/history" element={<History />} />
      {/* صفحة تفاصيل السجل */}
      <Route path="/history-details" element={<HistoryDetails />} />
    </Routes>
  );
}

export default App;