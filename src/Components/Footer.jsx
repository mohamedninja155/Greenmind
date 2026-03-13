import React from "react";
import logo from "../assets/logo.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram Circle.png";
import twitterIcon from "../assets/Twitter Circled.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleNav = (page) => {
    if (page === "Home") {
      navigate("/");
      window.scrollTo(0, 0);
    }
    if (page === "Products") {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.footer-container {
  background-color: #F7FEF4;
  padding: 80px 120px; 
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 120px;
  font-family: 'Inter', sans-serif;
  border-top: 1px solid rgba(104, 58, 47, 0.1); 
  border-bottom: 1px solid rgba(104, 58, 47, 0.1); 
  margin-top: 60px; 
  margin-bottom: 20px; 
}

.footer-logo-img {
  width: 60px; 
  margin-bottom: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.footer-logo-img:hover {
  transform: scale(1.15); 
}

.footer-link {
  font-size: 16px;
  color: #4B4B4B; 
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer-link.active-green {
  color: #38BC3E !important;
}

.footer-link:hover {
  font-weight: 700; 
  color: #38BC3E; 
  transform: scale(1.1); 
}

.footer-section {
  max-width: 320px;
}

.footer-text {
  font-size: 16px;
  color: #4B4B4B;
  line-height: 1.7;
  margin: 0;
}

.footer-header {
  font-size: 28px;
  color: #683A2F;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.social-img {
  width: 22px;
  cursor: pointer;
  transition: transform 0.2s;
}

.social-img:hover {
  transform: scale(1.2);
}

.bottom-bar {
  text-align: center;
  padding: 20px 0;
  background-color: #D9BDB4;
  color: #683A2F;
  border-top: 1px solid rgba(0, 0, 0, 0.08); 
  font-family: 'Inter', sans-serif;
}
      `}</style>

      <footer className="footer-container">
        <div className="footer-section">
          <img
            src={logo}
            alt="Logo"
            className="footer-logo-img"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
          <p className="footer-text" style={{ marginBottom: "20px" }}>
            Supporting smart and sustainable agriculture.
          </p>
          <p className="footer-text">
            Providing seeds, soil, and reliable growing solutions for all.
          </p>
        </div>

        <div>
          <h3 className="footer-header">Pages</h3>
          {["Home", "Articles", "Why Us", "Features", "Products", "Reviews", "History", "FAQ"].map((page) => (
            <p
              key={page}
              className={`footer-link ${page === "Products" ? "active-green" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => handleNav(page)}
            >
              {page}
            </p>
          ))}
        </div>

        <div>
          <h3 className="footer-header">Contact</h3>
          <p className="footer-text" style={{ marginBottom: "10px", marginTop: "10px" }}>
            +201023456789
          </p>
          <p className="footer-text" style={{ marginBottom: "10px" }}>
            support@GreenMind.com
          </p>
          <p className="footer-text">Al-Kaiman, Al-Fayoum - Egypt</p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" className="social-img" />
            <img src={instagramIcon} alt="Instagram" className="social-img" />
            <img src={twitterIcon} alt="Twitter" className="social-img" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;