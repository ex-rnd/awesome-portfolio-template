// components/Home/Hero/Hero.tsx 
"use client";

import { Button } from '@/components/ui/button';
import { SparkleIcon, StarIcon } from 'lucide-react';
import React from 'react';

import {TypeAnimation} from 'react-type-animation';


const Hero = () => {
  return (
    <div
        id="home"
        className="
          relative min-h-screen overflow-hidden flex items-center justify-center

          [bg-size:200%_200%]
          animate-[gradientCycle5_7500ms_ease-in-out_infinite]

          before:content-[''] before:absolute before:inset-0
          before:bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.18)_100%)]
          before:pointer-events-none

          after:content-[''] after:absolute after:inset-0
          after:bg-[linear-gradient(120deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_40%,rgba(180,120,255,0.15)_80%,rgba(0,0,0,0)_100%)]
          after:blur-3xl after:opacity-70 after:pointer-events-none

          transition-all duration-700
          hover:brightness-110 hover:saturate-150
        "
    >
      
    { /* Content */ }
    <div className="relative z-10 text-center">
      { /* Sub Title */ }


      { /* Banner */ }
        <div 
          data-aos="fade-up" 
          data-aos-easing="ease-in-out-cubic"
          className="sm:mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm
            text-shadow-muted-foreground dark:text-gray-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Available for opportunities
            </span>
        </div>

      { /* Title */ }
      <h1 data-aos="flip-left" data-aos-delay="100" className="text-4x1 text-cyan-100 sm:text-5xl md:text-6xl"> 
        Hi, I&apos;m{" "} 
        <span className="font-bold text-white dark:font-bold dark:text-rose-500">James Kilonzo</span> 
      </h1>

      { /* Typewrite Effects */ }
      <div 
        data-aos="zoom-in" 
        data-aos-delay="10"
        className="py-6 text-xl sm:text-2xl md:text-3xl text-white text-shadow-white dark:text-white font-semibold mb-4 sm:mb-8 h-12">
        <TypeAnimation
        sequence={[
          "AI Engineer ",
          2500,
          "Data Engineer ",
          2000,
          "Certified Data Scientist ",
          1500,
          "Certified Data Analyst ",
          1000,
          "Certified Network Engineer ",
          500,
          "Robotics Engineer ",
          250,
        ]}

        wrapper = "span"
        speed = {50}
        repeat = {Infinity} 
        className="font-mono"
        
        /> 
      </div>

      { /* Description */ }
      <p 
        data-aos="fade-up" 
        data-aos-delay="300"
        className="
        leading-snug text-lg dark:text-gray-200 max-w-2xl mx-auto mb-1
        bg-linear-to-r from-pink-500 via-teal-400 to-yellow-400
        bg-clip-text text-transparent hover:scale-[1.05]
        ">
        Engineering intelligent, scalable digital experiences that move fast and deliver impact.
      </p>

      <div className="h-4">

      </div>

      <p 
        data-aos="fade-up" 
        data-aos-delay="400"
        className="
        leading-snug font-mono text-[16px] text-cyan-200 text-center dark:text-gray-200 max-w-2xl mx-auto mb-10
        bg-linear-to-r from-cyan via-blue-200 to-white bg-clip-text animate-pulse transition-all 
        duration-300 ease-out hover:scale-[1.03] hover:brightness-125 
        "
      >
        I build AI systems that ship fast, scale smoothly, and solve real problems.
      </p>

      { /* Buttons */ }
      <div 
        data-aos="fade-up" 
        data-aos-delay="400"
        className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
          <a href="https://github.com/ex-rnd">
            <StarIcon className="w-5 h-5 mr-2" />
            View Projects
          </a>
        </Button>
        <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
          <a href="https://www.linkedin.com/in/james-kilonzo-0aa2b1197/">
            <SparkleIcon className="w-5 h-5 mr-2" />
            View Resume
          </a>
        </Button>
      </div>

    </div>
    </div>
  )
}

export default Hero;

















