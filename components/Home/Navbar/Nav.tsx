// components/Home/Navbar/Nav.tsx 

"use client";

import Logo from '@/components/Helper/Logo';
import ThemeToggler from '@/components/Helper/ThemeToggler';
import { NavLinks } from '@/Constant/Constant';
import { MenuSquareIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

type Props = {
  openNav: () => void;
}

const menus = NavLinks.map((link) => link.name.toLowerCase() );
const Nav = ({openNav}: Props) => {

  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90 ) setNavBg(true);
      if (window.scrollY < 90 ) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);

  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        } );
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    menus.forEach((menu) => {
      const element = document.getElementById(menu);

      if (element) observer.observe(element);
    } );

    return () => observer.disconnect();



  }, [] );


  return (
    <header className="left-0 right-0 bg-black">
    <div className={`transition-all duration-300 h-[12vh] z-100 fixed w-full 
        ${navBg 
            ? "bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-slate-900 dark:via-rose-950 dark:to-slate-900 shadow-lg backdrop-blur-md"
            : "bg-transparent"
          } 
        `}
    >
      <div className="flex items-center h-full justify-between w-[90%] x1:w-[80%] mx-auto">

        {/* LOGO */}
        <Logo/>

        {/* Nav links */}
        <div className="hidden lg:flex items-center space-x-10">
          { NavLinks.map((link, index) => {
            const id = link.name.toLowerCase();
            const isActive = activeSection === id;
            return <Link 
            key={index} 
            href={link.href} 
            className={`font-bold transition-all duration-200
            ${
              isActive 
              ? "font-extrabold text-cyan-300 dark:text-rose-500"
              : "font-bold text-white dark:text-white hover:text-blue-300 hover:font-extrabold dark:hover:text-yellow-200"
            }
            
          `}>
              <p>
                { link.name }
              </p>

                   </Link>
          }) }
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/james-kilonzo-0aa2b1197" 
          className="box-border relative z-10 inline-flex items-center justify-center w-auto px-1 sm:px-1 py-1 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-stone-300">
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <span>
                <FaLinkedin className="w-6 h-6"/>
              </span>
            </span>
          </a>

          {/* Theme Toggler */}
          <ThemeToggler/>

          {/* Burger Menu */}
          <MenuSquareIcon 
            onClick={openNav} 
            className="w-10 h-10 cursor-pointer text-cyan-50 dark:text-white lg:hidden"
          />


        </div>

      </div>
    </div>
    </header>
  )
}

export default Nav;


