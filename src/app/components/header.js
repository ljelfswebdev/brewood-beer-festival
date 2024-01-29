"use client";

// components/Header.js

import { useState } from 'react';
import menuData from '../../../data/links.json';


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`md:bg-white p-4 relative ${isMenuOpen ? 'bg-blue' : 'bg-white'}`}>


      <div className="container mx-auto flex justify-between items-start">
        <div className="text-white font-bold text-xl ">
            <img src="./logo.png" alt="logo" className="w-24"/>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={isMenuOpen ? 'text-white' : 'text-blue'}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? 'absolute top-full left-0 right-0 bg-blue px-4 h-screen flex items-center flex-col' : 'hidden md:flex'
          }`}
        >
         {menuData.map((menuItem, index) => (
            <a
              key={index}
              href={menuItem.link}
              className="text-white md:text-blue block relative md:inline-block p-2 after:content-[''] after:absolute after:bottom-1 after:w-full after:left-0 after:h-0.5 after:max-w-0 after:overflow-hidden md:after:bg-blue after:bg-white after:transition-all hover:after:max-w-full"
            >
              {menuItem.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

