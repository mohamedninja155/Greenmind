import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BottomBar from "../Components/BottomBar";
import { useCart } from "../context/CartContext";

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [productsData, setProductsData] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const API_BASE = "https://diaphysial-solenoidally-rosalyn.ngrok-free.dev";

  useEffect(() => {
    fetch(`${API_BASE}/api/Product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Products loaded successfully:", data);
        setProductsData(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleAdd = (product) => {
    // نمرر المنتج للكارت بالرابط الكامل للسيرفر عشان يظهر في صفحة الدفع
    const fullImgUrl = `${API_BASE}${product.img}`;
    addToCart({ ...product, img: fullImgUrl });
    navigate("/cart");
  };

  const filteredProducts = productsData.filter((p) => {
    const nameMatch = p.name ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const matchesTab = activeTab === "All" ? true : p.category === activeTab;
    return matchesTab && nameMatch;
  });

  return (
    <div className="products-page-outer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .products-page-outer { background-color: #F7FEF4; min-height: 100vh; font-family: 'Inter', sans-serif; margin: 0; padding: 0; }
        .products-container-v4 { padding-top: 140px; text-align: center; }
        .header-text-main { font-weight: 600; font-size: 24px; color: #4B4B4B; margin-bottom: 10px; }
        .header-text-sub { font-weight: 500; font-size: 18px; color: #4B4B4B; margin-bottom: 30px; }
        .search-section { display: flex; justify-content: center; margin-bottom: 50px; }
        .search-pill-v4 { background: #E0E0E0; width: 420px; height: 48px; border-radius: 25px; display: flex; align-items: center; padding: 0 20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05); }
        .search-icon-v4 { margin-right: 12px; flex-shrink: 0; }
        .search-input-v4 { background: transparent; border: none; outline: none; width: 100%; text-align: center; font-size: 16px; color: #4B4B4B; }
        .tabs-navigation { display: flex; justify-content: center; gap: 80px; margin-bottom: 120px; }
        .nav-tab { font-size: 22px; font-weight: 600; color: #683A2F; cursor: pointer; transition: 0.3s; }
        .nav-tab.active { border-bottom: 3px solid #683A2F; }
        .products-grid-v4 { display: grid; grid-template-columns: repeat(3, 235px); justify-content: center; gap: 130px 45px; padding-bottom: 80px; margin: 0 auto; }
        .product-card-v4 { background: rgba(227, 209, 200, 0.2); border-radius: 20px; padding: 15px; height: 260px; display: flex; flex-direction: column; position: relative; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .product-card-v4:hover { transform: scale(1.11); background: rgba(227, 209, 200, 0.4); box-shadow: 0 10px 25px rgba(104, 58, 47, 0.15); z-index: 10; }
        .product-card-v4.no-desc { height: 180px; }
        .img-container-v4 { position: absolute; top: -45px; left: 50%; transform: translateX(-50%); width: 130px; height: 130px; display: flex; justify-content: center; align-items: center; }
        .product-img-v4 { max-width: 100%; max-height: 100%; object-fit: contain; }
        .card-details-v4 { text-align: left; margin-top: 65px; display: flex; flex-direction: column; flex-grow: 1; }
        .card-name-v4 { color: #683A2F; font-size: 16px; font-weight: 800; margin-bottom: 5px; }
        .card-desc-v4 { color: #4B4B4B; font-size: 14px; line-height: 1.3; margin-top: 5px; margin-bottom: 10px; }
        .card-footer-v4 { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
        .order-button-v4 { background: #683A2F !important; color: white !important; border: none; padding: 8px 14px; border-radius: 8px; font-weight: 700; cursor: pointer; transition: all 0.3s ease; }
        .price-v4 { color: #683A2F; font-weight: 800; font-size: 16px; }
      `}</style>

      <Navbar />
      <div className="products-container-v4">
        <header className="products-header">
          <h1 className="header-text-main">From seeds to soil — we’ve got your farm covered.</h1>
          <p className="header-text-sub">Let’s Get You Growing!</p>
          <div className="search-section">
            <div className="search-pill-v4">
              <svg className="search-icon-v4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#683A2F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="search-input-v4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="tabs-navigation">
            {["All", "Soil", "Seeds", "Tools"].map((tab) => (
              <span key={tab} className={`nav-tab ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </span>
            ))}
          </div>
        </header>

        <main className="products-grid-v4">
          {filteredProducts.map((product) => (
            <div className={`product-card-v4 ${!product.desc ? "no-desc" : ""}`} key={product.id}>
              <div className="img-container-v4">
                <img
                  src={`${API_BASE}${product.img}`}
                  alt={product.name}
                  className="product-img-v4"
                  onError={(e) => { 
                    // لو الصورة من السيرفر منورتش، جرب يفتحها من الفولدر المحلي بالاسم اللي الباك إند باعتو (اللي فيه شرطات دلوقتي)
                    e.target.src = product.img; 
                    e.target.onerror = null; // يمنع اللوب لو الصورة مش موجودة خالص
                  }}
                />
              </div>
              <div className="card-details-v4">
                <h3 className="card-name-v4">{product.name}</h3>
                {product.desc && <p className="card-desc-v4">{product.desc}</p>}
                <div className="card-footer-v4">
                  <button className="order-button-v4" onClick={() => handleAdd(product)}>Order Now</button>
                  <span className="price-v4">EG{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
      <BottomBar />
    </div>
  );
}

export default ProductsPage;