import React, { useState, useEffect } from "react";

export default function Carosel() {
  const [banners, setBanners] = useState([]);
  const [bannerError, setBannerError] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      try {
        const mockData = [
          {
            maBanner: 1,
            tenKhoaHoc: "Khóa học JavaScript cơ bản",
            hinhAnh:
              "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
            danhGia: 9.0,
            tongbai: 2,
            luotxem: "45.353 lượt xem",
          },
          {
            maBanner: 2,
            tenKhoaHoc: "Cấu trúc dữ liệu và giải thuật",
            hinhAnh:
              "https://miro.medium.com/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg",
            danhGia: 9.0,
            tongbai: 2,
            luotxem: "45.353 lượt xem",
          },
          {
            maBanner: 3,
            tenKhoaHoc: "Lập trình Front End cơ bản",
            hinhAnh:
              "https://topdev.vn/blog/wp-content/uploads/2023/02/front-end.png",
            danhGia: 9.0,
            tongbai: 2,
            luotxem: "45.353 lượt xem",
          },
        ];
        setBanners(mockData);
        setBannerLoading(false);
      } catch (error) {
        setBannerError("Lỗi tải banner!");
        setBannerLoading(false);
      }
    }, 1000);
  }, []);

  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  if (bannerLoading) return(
<div
  class="hover:scale-110 transition-all ease-in-out cursor-pointer hover:shadow-xl hover:shadow-neutral-700 delay-250 animate-spin delay-50 duration-1000 bg-gradient-to-br border-4 shadow-inner shadow-neutral-700 border-neutral-950 from-white/80 to-gray-600 rounded-full grid place-items-center z-0 h-20 w-20 relative"
>
  <div
    class="rounded-full bg-neutral-900 absolute rotate-[90deg] z-20 h-20 scale-50 w-2"
  ></div>
  <div
    class="rounded-full bg-neutral-900 absolute rotate-[180deg] z-20 h-20 scale-50 w-2"
  ></div>
</div>
) 
  if (bannerError) return <p>{bannerError}</p>;

  return (
    <div className="relative w-full mx-auto mt-6">
      {/* Banner */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={banners[currentBanner].hinhAnh}
          alt={banners[currentBanner].tenKhoaHoc}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-xl font-bold">{banners[currentBanner].tenKhoaHoc}</h2>
          <p>⭐ {banners[currentBanner].danhGia} | 📚 {banners[currentBanner].tongbai} bài | 👀 {banners[currentBanner].luotxem}</p>
        </div>
      </div>

      {/* Nút điều khiển */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        ❯
      </button>

      {/* Dấu chấm */}
      <div className="flex justify-center mt-3 space-x-2">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentBanner === index ? "bg-red-600" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
