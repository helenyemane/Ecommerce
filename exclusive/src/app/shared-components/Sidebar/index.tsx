import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { AppleIcon, ArrowRightIcon } from "../Icons";

export default function SidebarVoucher() {
  const menuItems = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  const products = [
    '/pictures/iphone.jpg', '/pictures/airpode2.png', '/pictures/pc3.png', '/pictures/watch2.png', '/pictures/headset.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [products.length]);
  return (
    <div className="flex max-w-7xl mx-auto min-h-[380px] p-4">
      { }
      <aside className="min-w-[200px] border-r border-gray-200 pr-6">
        <ul className="space-y-4 text-lg font-poppins text-black">
          {menuItems.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center cursor-pointer hover:font-semibold">
              <span>{item}</span>
              {(item === "Woman’s Fashion" || item === "Men’s Fashion") && <span>&gt;</span>}
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-3/4 bg-black relative flex items-center px-10 h-102 ">

        <div className="flex-1 text-white">
          <div className="flex items-center gap-7 mb-5">
            <span className=" w-10 h-10  flex items-center justify-center">
              <AppleIcon className='' />
            </span>
            <span className="font-poppins">iPhone 14 Series</span>
          </div>
          <h2 className="text-5xl font-bold font-poppins mb-4 leading-tight">
            Up to 10%<br />
            off Voucher
          </h2>
          <button className="underline text-white flex items-center gap-1 font-poppins text-lg cursor-pointer select-none py-2">
            Shop Now <span className="ml-1"><ArrowRightIcon /></span>
          </button>
        </div>
        <div className="flex-1 flex justify-end items-center h-full">
          <Image
            src={products[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            width={400}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                }`}
            ></span>
          ))}
        </div>
      </div>
    </div>

  )
}