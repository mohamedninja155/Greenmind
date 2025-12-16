import uploadIcon from "../assets/icon.png";
import imageIcon from "../assets/image.png";

export default function Hero() {
  return (
    <section className="bg-[#F7FEF4] py-[80px] flex flex-col items-center text-center">

      {/* Title */}
      <h1 className="text-[48px] font-semibold text-[#6b3b2a] mb-[16px]">
        Detect Plant Diseases Instantly
      </h1>

      {/* Description */}
      <p className="max-w-[620px] text-black text-[36px] mb-[48px]">
        Upload a photo of your plant and let our AI identify possible diseases
        in seconds. Get treatment suggestions and keep your crops healthy.
      </p>

      {/* المربع الأبيض الكبير */}
      <div className="w-[642px] h-[595px] bg-white rounded-[25px] flex flex-col items-center justify-center">

        {/* المربع المتقطّع */}
        <div
          className="w-[546px] h-[470px] border border-dashed border-[#683A2F] rounded-[20px] flex flex-col items-center justify-center pt-[40px]"
        >
          <img
            src={uploadIcon}
            alt="Upload"
            className="w-[163.52px] h-[178.29px] mb-[32px]"
          />

          <p className="text-[36px] text-[#000000] mb-[32px]">
            Drag & drop your photos here
          </p>

          {/* زر Choose photo */}
          <label className="cursor-pointer">
            <input type="file" hidden />
            <div className="flex items-center gap-[12px] bg-[#683A2F] px-[28px] py-[14px] rounded-[12px]">
              <img src={imageIcon} alt="" className="w-[60px] h-[60px]" />
              <span className="text-[32px] font-medium text-white">
                Choose photo
              </span>
            </div>
          </label>
        </div>

      </div>

    
      <p className="text-[24px] text-[#000000] mt-[24px] leading-[32px] text-center">
        Accepted formats: JPG, PNG <br />
        Max file size: 5MB
      </p>

    </section>
  );
}
