import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min"; 
import * as THREE from "three";

export default function Login() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,      // màu nút (trắng)
        backgroundColor: 0x1e3a8a, // nền xanh đậm (tailwind blue-900)
        points: 12.0,         // số lượng điểm
        maxDistance: 20.0,    // khoảng cách tối đa giữa các đường nối
        spacing: 18.0         // khoảng cách giữa các điểm
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex items-center justify-center"
    >
      {/* Form login */}
      <form className="max-w-sm w-full bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h1 className="mb-4 text-center text-xl font-bold text-gray-800">
          Login Page
        </h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
