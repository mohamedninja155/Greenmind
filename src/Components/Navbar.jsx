import React from "react";
import logo from "../assets/logo.png";
import NewsFeed from "../assets/News Feed.png"; 
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleNav = (item) => {
    if (item === "Home") {
      navigate("/");
      window.scrollTo(0, 0);
    }
    if (item === "Products") {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');

.navbar-container {
  height: 70px;
  background-color: #E3D1C8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  font-family: 'Cinzel', serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
}

.navbar-logo {
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: scale(1.1);
}

.nav-list {
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: 80px;
  gap: 28px;
  padding: 0;
}

.nav-button {
  background: none;
  border: none;
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 400;
  color: #6B4A3A;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 5px 8px;
  position: relative;
  transition: all 0.25s ease;
}

.nav-button:hover {
  font-weight: 700;
  transform: scale(1.12);
}

.nav-list {
  margin-left: 40px;
}

.nav-item:nth-child(5) .nav-button {
  font-weight: 700;
}

.nav-item:nth-child(5) .nav-button::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -6px;
  width: 75%;
  height: 2px;
  background-color: #6B4A3A;
}

.user-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.user-img {
  width: 25px;
  height: auto;
  transition: transform 0.2s;
}

.user-img:hover {
  transform: scale(1.1);
}
      `}</style>

      <nav className="navbar-container">
        <img
          src={logo}
          alt="logo"
          className="navbar-logo"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />

        <ul className="nav-list">
          {["Home", "Articles", "About Us", "Features", "Products", "FAQ"].map((item) => (
            <li key={item} className="nav-item">
              <button className="nav-button" onClick={() => handleNav(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button className="user-btn">
          <img src={NewsFeed} alt="News Feed" className="user-img" />
        </button>
      </nav>
    </>
  );
}

export default Navbar;