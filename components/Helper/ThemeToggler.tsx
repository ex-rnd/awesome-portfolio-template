// components/Helper/ThemeToggler.tsx

"use client"; // Convert to client component <- hook 
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeToggler = () => {

  const [mounted, setMounted] = useState(false);

  const {theme, setTheme, systemTheme} = useTheme();

  useEffect(() => {
    const mountCheck = () => {
        setMounted(true);
    };

    mountCheck();

  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" 
  ? systemTheme 
  : theme;

  return <button onClick = {
    () => setTheme(
        currentTheme === "dark" ? "light" : "dark")
    } 
    
    className='p-2 transition 
    w-8 h-8 cursor-pointer 
    bg-gray-100 
    dark:bg-gray-800 
    rounded-lg 
    flex 
    flex-col 
    items-center 
    justify-center ring-offset-2 ring-1 ring-amber-300 ring-offset-red-200 hover:ring-offset-indigo-500 ease focus:outline-stone-300'>

        { 
            currentTheme === "dark" ? (
            <Sun className="text-yellow-400 w-7 h-7 cursor-pointer"/>

        ) : (
            <Moon className="text-gray-900 w-7 h-7 cursor-pointer"/>

        ) 
        }

  </button>
};

export default ThemeToggler;
