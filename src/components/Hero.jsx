import { useState } from "react";
import uploadIcon from "../assets/icon.png";
import imageIcon from "../assets/image.png";

export default function Hero() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <section className="bg-[#F7FEF4] min-h-screen pt-[160px] pb-[80px] flex flex-col items-center text-center font-['Inter']">
      <h1 className="text-[40px] md:text-[56px] font-extrabold text-[#683A2F] mb-[24px] leading-tight">
        Detect Plant Diseases Instantly
      </h1>

      <p className="max-w-[700px] text-[#4B4B4B] text-[18px] mb-[56px] px-4 leading-[1.6]">
        Upload a photo of your plant and let our AI identify possible diseases
        in seconds. Get treatment suggestions and keep your crops healthy.
      </p>

      <div className="w-full max-w-[642px] px-4">
        <div className="bg-white rounded-[30px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="w-full h-[400px] border-[3px] border-dashed border-[#D1D5DB] rounded-[24px] flex flex-col items-center justify-center bg-[#FAFAFA] hover:bg-[#F5F5F5] transition-colors relative">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-contain rounded-[20px] p-2"
              />
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src={uploadIcon}
                  alt="Upload"
                  className="w-[100px] h-[100px] mb-[24px] opacity-80"
                />

                <p className="text-[24px] font-semibold text-[#4B4B4B] mb-[32px]">
                  Drag & drop your photos here
                </p>
              </div>
            )}

            <label className="cursor-pointer relative z-10">
              <input
                type="file"
                accept="image/png, image/jpeg"
                hidden
                onChange={handleFileChange}
              />

              <div className="flex items-center gap-[12px] bg-[#683A2F] text-white px-[32px] py-[16px] rounded-[12px] hover:bg-[#5a3228] transition shadow-lg hover:shadow-xl active:scale-95 transform duration-200">
                <img src={imageIcon} alt="" className="w-[24px] h-[24px]" />
                <span className="text-[20px] font-bold">Choose photo</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Info Footer */}
      <p className="text-[14px] text-[#9CA3AF] mt-[32px] leading-[1.6] font-medium">
        Accepted formats: JPG, PNG <br />
        Max file size: 5MB
      </p>
    </section>
  );
}
