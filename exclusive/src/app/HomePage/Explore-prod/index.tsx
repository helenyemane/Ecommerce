'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye, AiFillEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

type Product = {
  name: string;
  price: number;
  image: string;
  imageClass?: string;
  reviews: number;
};

const products: Product[] = [
  {
    name: 'Breed Dry Dog Food',
    price: 100,
    image: '/pictures/9.png',
    reviews: 65,
  },
  {
    name: 'CANNON EOS DSLR Camera',
    price: 960,
    image: '/pictures/10.png',
    reviews: 65,
  },
  {
    name: 'ASUS FHD Gaming Laptop',
    price: 160,
    image: '/pictures/10.png',
    imageClass: '',
    reviews: 65,
  },
  {
    name: 'Curology Product Set',
    price: 360,
    image: '/pictures/13.png',
    reviews: 65,
  },
  {
    name: 'Kids Electric Car',
    price: 960,
    image: '/pictures/13.png',
    reviews: 65,
  },
  {
    name: 'Jr. Zoom Cleats',
    price: 1160,
    image: '/pictures/14.png',
    reviews: 35,
  },
  {
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    image: '/pictures/15.png',
    reviews: 55,
  },
  {
    name: 'Quilted Satin Jacket',
    price: 660,
    image: '/pictures/16.png',
    reviews: 55,
  },
];

export default function ExploreProd() {
  const [likedStates, setLikedStates] = useState(Array(products.length).fill(false));
  const [viewedStates, setViewedStates] = useState(Array(products.length).fill(false));

  const toggleLiked = (index: number) => {
    setLikedStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const toggleViewed = (index: number) => {
    setViewedStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section className="font-poppins p-6 w-3/4 m-auto mt-40">
      <div className="flex justify-between items-center mb-6">
        <div className="relative group">
          <div className='flex gap-4.5 mb-9'>
            <p className='border-red-400 bg-red-400 text-red-400 w-3.5 h-9 rounded-sm'>.</p>
            <p className='text-red-400 text-[16px] mt-1.5'>Our Products</p>
          </div>
          <h2 className="text-2xl font-semibold"> Explore Our Products</h2>
        </div>
        <button className="border pl-7.5 pr-7.5 pt-2.5 pb-2.5 bg-red-400 rounded-sm text-white text-sm font-medium hover:underline">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-12 ">
        {products.map((product, index) => (
          <div key={product.name} className="p-4 hover:shadow-lg transition relative">
            <div className="relative ml-5 mb-4 border-gray-100 rounded-lg bg-gray-100 w-70.5 p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={160}
                className={`h-40 object-cover rounded ${product.imageClass || ''}`}
              />
              <div className="absolute top-2 right-2 flex flex-col gap-2 text-gray-600">
                <button onClick={() => toggleLiked(index)}>
                  {likedStates[index] ? (
                    <AiFillHeart className="text-red-500 mb-4.5 cursor-pointer" />
                  ) : (
                    <AiOutlineHeart className="mb-4.5 cursor-pointer hover:text-red-500" />
                  )}
                </button>
                <button onClick={() => toggleViewed(index)}>
                  {viewedStates[index] ? (
                    <AiFillEye className="text-blue-500 cursor-pointer" />
                  ) : (
                    <AiOutlineEye className="cursor-pointer hover:text-blue-500" />
                  )}
                </button>
              </div>
            </div>
            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-semibold">${product.price}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              <span className="text-gray-600 ml-2">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}