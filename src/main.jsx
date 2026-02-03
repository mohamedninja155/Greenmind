import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. استيراد BrowserRouter من مكتبة الراوتر
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. لازم تغلف الـ App بـ BrowserRouter عشان اللينكات تشتغل */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)