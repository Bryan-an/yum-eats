'use client';

import HeartIcon from '@/icons/heart';
import HelpIcon from '@/icons/help';
import Menu2Icon from '@/icons/menu-2';
import SearchIcon from '@/icons/search';
import ShoppingCartIcon from '@/icons/shopping-cart';
import TruckIcon from '@/icons/truck';
import UserIcon from '@/icons/user';
import WalletIcon from '@/icons/wallet';
import XIcon from '@/icons/x';
import { useState } from 'react';

export const TopNavComponent = () => {
  const [sideNav, setSideNav] = useState<boolean>(false);

  return (
    <header className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center gap-3">
        <button onClick={() => setSideNav((prev) => !prev)}>
          <Menu2Icon />
        </button>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold">
          Yum
          <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-3xl p-1 text-[14px]">
          <span className="bg-orange-700 text-white rounded-3xl p-2 font-bold">
            Free
          </span>
          <span className="p-2 font-bold">Delivery</span>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <SearchIcon />
        <input
          type="search"
          className="bg-transparent p-2 w-full outline-none"
          placeholder="Search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 px-6 rounded-3xl gap-1">
        <ShoppingCartIcon />
        Cart
      </button>

      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav((prev) => !prev)}
        ></div>
      ) : null}

      <div
        className={`fixed top-0 ${
          sideNav ? 'left-0' : 'left-[-100%]'
        } w-[300px] h-screen bg-white z-10 duration-200`}
      >
        <button
          onClick={() => setSideNav((prev) => !prev)}
          className="absolute right-4 top-4"
        >
          <XIcon />
        </button>
        <h2 className="text-2xl p-4 font-semibold">
          Yum
          <span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900 gap-5">
            <li className="text-lg font-semibold flex gap-3">
              <UserIcon />
              My Account
            </li>
            <li className="text-lg font-semibold flex gap-3">
              <TruckIcon />
              Delivery
            </li>
            <li className="text-lg font-semibold flex gap-3">
              <HeartIcon />
              My Favorite
            </li>
            <li className="text-lg font-semibold flex gap-3">
              <WalletIcon />
              My Wallet
            </li>
            <li className="text-lg font-semibold flex gap-3">
              <HelpIcon />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
