"use client";
import {
  Mobile,
  Computer,
  CameraIcon,
  Game,
  EarPhoneIcon,
  AppleIcon
} from "@/app/shared-components/Icons";

export default function Category() {
  const categories = [
    { name: "Phones", icon: <Mobile /> },
    { name: "Computers", icon: <Computer /> },
    { name: "SmartWatch", icon: <AppleIcon /> },
    { name: "Camera", icon: <CameraIcon /> },
    { name: "HeadPhones", icon: <EarPhoneIcon /> },
    { name: "Gaming", icon: <Game /> },
  ];

  return (
    <div className="">
      <div className="w-3/4 m-auto flex items-center gap-4 mb-35">
        <div className="flex gap-8 overflow-x-auto no-scrollbar ">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-sm flex flex-col items-center justify-center w-520 h-38 border-gray-500 border cursor-pointer transition-colors duration-200 font-poppins py-5 bg-white text-black hover:bg-red-500 hover:text-white hover:border-0"
            >
              {cat.icon}
              <span className="mt-2 text-sm font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}