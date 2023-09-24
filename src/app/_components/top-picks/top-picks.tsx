'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '@/mock/data';

export const TopPicksComponent = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] m-auto py-2 px-2 mt-6">
        <Splide options={{ perPage: 4, gap: '0.5rem' }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <section className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white p-4">
                  <h3 className="capitalize">{item.title}</h3>
                  <p className="font-bold text-2xl">{item.price}</p>
                  <button className=" border border-dotted border-white text-white absolute bottom-4 rounded-xl px-6 py-2">
                    Add to Cart
                  </button>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl hover:scale-105 ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </section>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};
