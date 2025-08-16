'use client';

import Image from 'next/image';
import React from 'react';

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width={20} height={20} {...props}>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
    </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width={20} height={20} {...props}>
        <path d="M12 21C12 21 4.5 13.833 4.5 8.833C4.5 6.016 6.956 3.75 9.75 3.75C11.168 3.75 12 4.766 12 4.766C12 4.766 12.832 3.75 14.25 3.75C17.044 3.75 19.5 6.016 19.5 8.833C19.5 13.833 12 21 12 21Z" strokeWidth="2" />
    </svg>
);

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="currentColor" width={16} height={16} {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
    </svg>
);

const exampleProducts = [
    {
        id: 1,
        name: 'HAVIT HV-G92 Gamepad',
        price: 120,
        originalPrice: 160,
        discount: 40,
        rating: 5,
        reviews: 88,
        image: '/pictures/gamepad.jpg',
    },
    {
        id: 2,
        name: 'AK-900 Wired Keyboard',
        price: 960,
        originalPrice: 1160,
        discount: 35,
        rating: 4,
        reviews: 75,
        image: '/pictures/keyboard.jpg',
    },
    {
        id: 3,
        name: 'IPS LCD Gaming Monitor',
        price: 370,
        originalPrice: 400,
        discount: 30,
        rating: 4,
        reviews: 99,
        image: '/pictures/3.jpg',
    },
    {
        id: 4,
        name: 'S-Series Comfort Chair',
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 5,
        reviews: 99,
        image: '/pictures/4.jpg',
    },
    {
        id: 5,
        name: 'S-Series Comfort Chair',
        price: 375,
        originalPrice: 400,
        discount: 25,
        rating: 5,
        reviews: 99,
        image: '/pictures/5.png',
    },
];

export default function Products() {
    return (
        <main className="bg-white min-h-screen py-10 flex flex-col items-center">
            <div className="w-full px-2 flex flex-col items-center">
                <div className="w-full overflow-x-auto scrollbar-hide">
                    <div className="flex gap-7 min-w-[1000px]">
                        {exampleProducts.map(product => (
                            <div
                                key={product.id + product.name}
                                className="relative bg-white rounded-md shadow-sm border border-gray-100 w-[220px] flex-shrink-0 mx-auto pb-4 group hover:shadow-lg transition"
                            >
                                <div className="absolute top-4 left-4 bg-[#DB4444] text-white px-3 py-1 rounded text-xs font-semibold z-10">
                                    -{product.discount}%
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                                    <button className="rounded-full w-8 h-8 flex items-center justify-center bg-white shadow-sm hover:bg-gray-200 transition">
                                        <HeartIcon className="text-gray-700" />
                                    </button>
                                    <button className="rounded-full w-8 h-8 flex items-center justify-center bg-white shadow-sm hover:bg-gray-200 transition">
                                        <EyeIcon className="text-gray-700" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-center h-40 my-5">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={144}
                                        height={144}
                                        className="object-contain h-36 w-36"
                                        priority
                                    />
                                </div>
                                <button className="absolute left-0 right-0 bottom-28 mx-0 w-full bg-black text-white py-2 font-semibold rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Add To Cart
                                </button>
                                <div className="pt-3 px-4">
                                    <h3 className="font-semibold text-base font-poppins mb-1">{product.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#DB4444] font-bold text-lg">${product.price}</span>
                                        <span className="text-gray-400 line-through">${product.originalPrice}</span>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>
                                                <StarIcon />
                                            </span>
                                        ))}
                                        <span className="ml-2 text-gray-500 text-sm font-poppins">({product.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="mt-10 px-10 py-3 rounded bg-[#DB4444] text-white font-semibold text-lg hover:bg-[#c32c2c] transition">
                    View All Products
                </button>
            </div>
        </main>
    );
}