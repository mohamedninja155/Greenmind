import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reviews = () => {
 
  const inputStyle = {
    height: '60px',           // نزلنا من 78 لـ 60
    borderRadius: '10px',     
    fontSize: '18px',         // نزلنا من 36 لـ 18 (ده التغيير الأهم)
    fontWeight: '400',        
    paddingLeft: '20px',      
    border: '1px solid #CCCCCC',
    width: '100%',
    outline: 'none',
    color: '#4B4B4B' 
  };

  return (
    <div className="font-['Inter'] bg-[#F7FEF4] min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col items-center py-16 px-4">
        
        <h1 className="text-[#683A2F] text-[36px] md:text-[42px] font-bold mb-2 text-center">
          Customer Reviews
        </h1>
        
        <h2 className="text-[#683A2F] text-[24px] md:text-[28px] font-bold mb-10 text-center">
          Leave Your Review
        </h2>

        {/* صغرنا عرض الفورم لـ 800 بيكسل عشان تبقى ملمومة */}
        <form 
          className="w-full flex flex-col"
          style={{ maxWidth: '800px', gap: '30px' }} // قللنا الجاب لـ 30
        >
          
          <input 
            type="text" 
            placeholder="Name" 
            style={inputStyle}
            className="focus:border-[#683A2F] bg-white shadow-sm placeholder-gray-400 transition-colors"
          />

          <input 
            type="text" 
            placeholder="Phone" 
            style={inputStyle}
            className="focus:border-[#683A2F] bg-white shadow-sm placeholder-gray-400 transition-colors"
          />

          <input 
            type="text" 
            placeholder="Position" 
            style={inputStyle}
            className="focus:border-[#683A2F] bg-white shadow-sm placeholder-gray-400 transition-colors"
          />

          <input 
            type="email" 
            placeholder="Email" 
            style={inputStyle}
            className="focus:border-[#683A2F] bg-white shadow-sm placeholder-gray-400 transition-colors"
          />

          <textarea 
            placeholder="Write your feedback here..." 
            style={{
              ...inputStyle,       
              height: '220px',     // نزلنا من 496 لـ 220 (منطقي جداً)
              paddingTop: '20px',  
              resize: 'none'       
            }}
            className="focus:border-[#683A2F] bg-white shadow-sm placeholder-gray-400 transition-colors"
          ></textarea>

          <div 
            className="flex justify-center"
            style={{ margin: '20px 0' }}
          >
            <button 
              type="submit" 
              className="bg-[#683A2F] text-white font-bold hover:opacity-90 transition duration-300 shadow-md hover:shadow-lg"
              style={{
                width: '220px',       
                height: '60px',  
                fontSize: '22px',      
                borderRadius: '12px',
                color: '#FFFFFF'
              }}
            >
              Submet
            </button>
          </div>

        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;