// components/Home/Navbar/Logo.tsx 

import { StarsIcon } from 'lucide-react';
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
        <div className="bg-red-800 dark:bg-red-800 w-9 h-9 rounded-lg flex items-center justify-center flex-col">
            <StarsIcon className="text-white w-6 h-6"/>
        </div>

        <h1 className="sm:text-x1 hidden sm:block md:text-2xl text-cyan-50 dark:text-cyan-100 font-mono"> 
            { "< AI Dev />" } 
        </h1>
      
    </div>
  )
};

export default Logo;



