import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BottomBar from "../Components/BottomBar";

const rawStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.checkout-wrapper { background-color: #F7FEF4; min-height: 100vh; font-family: 'Inter', sans-serif; }
.checkout-container { max-width: 900px; margin: 0 auto; padding-top: 110px; padding-bottom: 60px; padding-left: 20px; padding-right: 20px; }
.checkout-title { font-size: 49px; font-weight: 800; color: #683A2f; margin-bottom: 40px; margin-top: 60px; }
.checkout-row { display: flex; align-items: center; margin-bottom: 35px; }
.checkout-label { width: 120px; font-size: 24px; font-weight: 600; color: #683A2F; flex-shrink: 0; }
.checkout-line-input { flex: 1; border: none; border-bottom: 1.5px solid #C9C9C9; background: transparent; height: 40px; font-size: 22px; color: #683A2F; outline: none; padding-left: 20px; }
.checkout-textarea { height: 80px; resize: none; }
.payment-option { display: flex; align-items: center; gap: 15px; font-size: 24px; font-weight: 600; color: #683A2F; margin-left: 20px; }
.payment-option input[type="checkbox"] { width: 22px; height: 22px; cursor: pointer; }
.confirm-btn-container { display: flex; justify-content: center; width: 100%; margin-top: 60px; }
.confirm-btn { width: 280px; height: 60px; border-radius: 15px; background-color: #683A2F; color: #FFF; font-size: 20px; font-weight: 600; border: none; cursor: pointer; }
.cart-details-container { width: 100%; max-width: 500px; padding-left: 20px; }
.cart-row { display: flex; justify-content: space-between; margin-bottom: 15px; }
.cart-text { font-size: 22px; color: #4B4B4B; }
`;

if (typeof document !== 'undefined') {
  const styleId = 'injected-checkout-styles';
  let styleTag = document.getElementById(styleId);
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleId;
    document.head.appendChild(styleTag);
  }
  styleTag.innerHTML = rawStyles;
}

function CartRow({ label, value, isTotal }) {
  return (
    <div className="cart-row">
      <span className="cart-text" style={{ fontWeight: isTotal ? 700 : 500 }}>{label}</span>
      <span className="cart-text" style={{ fontWeight: isTotal ? 700 : 500 }}>{value}</span>
    </div>
  );
}

function CheckoutPage() {
  const location = useLocation();

  const state = location.state || {};
  const itemsCount = state.itemsCount || 0;
  const subTotal = state.subTotal || 0;
  const discount = state.discount || 0;
  const total = state.total || 0;

  const [errors, setErrors] = useState({});

  const handlePhoneChange = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const handleConfirm = async () => {
    const name = document.querySelectorAll('input[type="text"]')[0].value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelectorAll('input[type="text"]')[1].value;
    const city = document.querySelectorAll('input[type="text"]')[2].value;
    const address = document.querySelectorAll('input[type="text"]')[3].value;
    const notes = document.querySelector('textarea').value;
    const paymentChecked = document.getElementById("cod").checked;

    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    else if (phone.length < 10) newErrors.phone = "Phone must be at least 10 digits";
    if (!city.trim()) newErrors.city = "City is required";
    if (!address.trim()) newErrors.address = "Address is required";
    if (!paymentChecked) newErrors.payment = "Select payment method";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const orderJSON = {
      userId: "12345",
      customerDetails: { name, email, phone, city, address, notes },
      cartDetails: {
        itemsCount: Number(itemsCount),
        subTotal: Number(subTotal),
        shipping: 0,
        taxes: 0,
        discount: Number(discount),
        total: Number(total)
      },
      paymentMethod: "Cash on delivery"
    };

    console.log("Sending Order to Server:", orderJSON);

    try {
      // تم تحديث الرابط للينك الجديد الذي أرسلته الآن
      const response = await fetch("https://diaphysial-solenoidally-rosalyn.ngrok-free.dev/api/Order/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${localStorage.getItem("token")}` 
        },
        body: JSON.stringify(orderJSON),
      });

      if (response.ok) {
        alert("Your order has been confirmed and sent to server ✅");
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server Error:", errorData);
        alert("Server received the request but failed to save order.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Failed to connect to server. Check your connection or ngrok link.");
    }
  };

  return (
    <div className="checkout-wrapper">
      <Navbar />
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-row">
          <label className="checkout-label">User</label>
          <input className="checkout-line-input" type="text" />
        </div>
        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

        <div className="checkout-row">
          <label className="checkout-label">Email</label>
          <input className="checkout-line-input" type="email" />
        </div>
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

        <div className="checkout-row">
          <label className="checkout-label">Phone</label>
          <input className="checkout-line-input" type="text" onInput={handlePhoneChange} />
        </div>
        {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}

        <div className="checkout-row">
          <label className="checkout-label">City</label>
          <input className="checkout-line-input" type="text" />
        </div>
        {errors.city && <p style={{color:"red"}}>{errors.city}</p>}

        <div className="checkout-row">
          <label className="checkout-label">Address</label>
          <input className="checkout-line-input" type="text" />
        </div>
        {errors.address && <p style={{color:"red"}}>{errors.address}</p>}

        <div className="checkout-row" style={{ alignItems: 'flex-start' }}>
          <label className="checkout-label">Notes</label>
          <textarea className="checkout-line-input checkout-textarea" />
        </div>

        <div className="checkout-row" style={{ marginTop: '40px' }}>
          <label className="checkout-label">Payment</label>
          <div className="payment-option">
            <input type="checkbox" id="cod" />
            <label htmlFor="cod">Cash on delivery</label>
          </div>
        </div>
        {errors.payment && <p style={{color:"red"}}>{errors.payment}</p>}

        <div className="checkout-row" style={{ marginTop: '40px', alignItems: 'flex-start' }}>
          <label className="checkout-label">Cart</label>
          <div className="cart-details-container">
            <CartRow label="Items" value={itemsCount} />
            <CartRow label="Sub Total" value={`EG${Number(subTotal).toFixed(2)}`} />
            <CartRow label="Shipping" value="EG0.00" />
            <CartRow label="Taxes" value="EG0.00" />
            <CartRow label="Discount" value={`-EG${Number(discount).toFixed(2)}`} />
            <hr style={{ borderColor: "#E0E0E0", margin: "14px 0" }} />
            <CartRow label="Total" value={`EG${Number(total).toFixed(2)}`} isTotal />
          </div>
        </div>

        <div className="confirm-btn-container">
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm Order
          </button>
        </div>
      </div>
      <Footer />
      <BottomBar />
    </div>
  );
}

export default CheckoutPage;