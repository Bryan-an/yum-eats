'use client';

import ArrowRightIcon from '@/icons/arrow-right';
import { mealData } from '@/mock/data';
import { useState } from 'react';

type IMeal = (typeof mealData)[0];

export const MealComponent = () => {
  const [foods, setFoods] = useState<IMeal[]>(mealData);

  const filterByCategory = (category: IMeal['category']) => {
    setFoods(mealData.filter((item) => item.category === category));
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center mt-8">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <button
            className="rounded-lg border border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 px-6 py-2 m-1 w-full"
            onClick={() => setFoods(mealData)}
          >
            All
          </button>
          <button
            className="rounded-lg border border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 px-6 py-2 m-1 w-full"
            onClick={() => filterByCategory('pizza')}
          >
            Pizza
          </button>
          <button
            className="rounded-lg border border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 px-6 py-2 m-1 w-full"
            onClick={() => filterByCategory('chicken')}
          >
            Chicken
          </button>
          <button
            className="rounded-lg border border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 px-6 py-2 m-1 w-full"
            onClick={() => filterByCategory('salad')}
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {foods.map((item) => (
          <section
            key={item.id}
            className="border-none hover:scale-105 duration-300 "
          >
            <div className="aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7 flex gap-2 text-orange-500">
              <p>View More</p>
              <ArrowRightIcon />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
