'use client';

import ChevronLeftIcon from '@/icons/chevron-left';
import ChevronRightIcon from '@/icons/chevron-right';
import { useState } from 'react';

const sliders = [
  {
    url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1653666322609-df808a84bc0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80mage/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
  },
];

export const FeaturedComponent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="max-w-[1520px] h-[500px] w-full p-4 relative">
      <img
        src={sliders[currentIndex].url}
        className="w-full h-full rounded-2xl object-cover duration-500"
        alt="Featured meals images"
      />
      <button className="absolute top-[50%] -translate-x-0 -translate-y-[50%] left-6 text-2xl rounded-full p-2 bg-orange-700 text-white w-10 h-10 flex justify-center items-center hover:bg-orange-600">
        <ChevronLeftIcon />
      </button>
      <button className="absolute top-[50%] -translate-x-0 -translate-y-[50%] right-6 text-2xl rounded-full p-2 bg-orange-700 text-white w-10 h-10 flex justify-center items-center hover:bg-orange-600">
        <ChevronRightIcon />
      </button>
    </div>
  );
};
