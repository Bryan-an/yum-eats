'use client';

import ChevronLeftIcon from '@/icons/chevron-left';
import ChevronRightIcon from '@/icons/chevron-right';
import PointFilledIcon from '@/icons/point-filled';
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

  const handlePrevSlidePress = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextSlidePress = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full p-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <button
        className="hidden absolute top-[50%] -translate-x-0 -translate-y-[50%] left-6 text-2xl rounded-full p-2 bg-orange-700 text-white w-10 h-10 group-hover:flex justify-center items-center hover:bg-orange-600"
        onClick={handlePrevSlidePress}
      >
        <ChevronLeftIcon />
      </button>
      <button
        className="hidden absolute top-[50%] -translate-x-0 -translate-y-[50%] right-6 text-2xl rounded-full p-2 bg-orange-700 text-white w-10 h-10 group-hover:flex justify-center items-center hover:bg-orange-600"
        onClick={handleNextSlidePress}
      >
        <ChevronRightIcon />
      </button>
      <div className="flex top-4 justify-center py-2 gap-3">
        {sliders.map((slide, index) => (
          <button key={slide.url} onClick={() => setCurrentIndex(index)}>
            <PointFilledIcon />
          </button>
        ))}
      </div>
    </div>
  );
};
