import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-[250px] bg-black flex items-center px-12 rounded-lg overflow-hidden">
      <div className="z-10 flex flex-col justify-center h-full">
        <span className="text-white text-base font-normal mb-2">
          iPhone 14 Series
        </span>
        <h2 className="text-white text-4xl font-semibold leading-tight mb-4">
          Up to 10%<br />off Voucher
        </h2>
        <button className="text-white underline font-medium text-base flex items-center gap-2 hover:opacity-80 transition">
          Shop Now
        </button>
      </div>
      {}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-2 z-20">
        <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
        <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
        <span className="w-3 h-3 rounded-full bg-pink-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
        <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
      </div>
    </div>
  );
};

export default Banner;