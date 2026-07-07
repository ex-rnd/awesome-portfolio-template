// components/Home/Footer/Footer.tsx
"use client";
import { footerSocialLinks } from '@/data';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12">
        <div className="relative w-[33%] md:w-[54%] lg:w-[33%] mx-auto items-center justify-center text-center">
            <div className="flex items-center gap-4  justify-center text-center">
                    {
                        footerSocialLinks.map((link) => {
                            return <a 
                            href={link.href}
                            key={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                            >
                                <link.icon 
                                    className="w-5 h-5"
                                />
                            </a>
                        })
                    }
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800 text-center">
                <p className="text-sm text-muted-foreground ">
                    ©️ {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer




















