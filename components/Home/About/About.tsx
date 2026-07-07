// components/Home/About/About.tsx 

import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import React from 'react';

import { highlights, stats } from "@/data";

const About = () => {
  return (
    <div 
        id="about" 
        className="py-16 bg-gray-100 dark:bg-gray-900">
        {/* Section Heading */}
        <SectionHeading 
        title_1='About' 
        title_2='Me' 
        description='Get to know the developer behind the code'/>

        <div className="grid w-[80%] mx-auto lg:grid-cols-2 items-center gap-10">
            {/* Image */}
            <div className="relative">
                <div 
                    data-aos="fade-right" 
                    data-aos-delay="10"
                    data-os-anchor-placement="top-center"
                    className="aspect-square rounded-2xl overflow-hidden p-2">
                    <Image 
                    src={"/images/awesome-portfolio-photo.png"}
                    alt="profile"
                    width={700}
                    height={700}
                    className="w-full h-full object-center rounded-xl"
                    />
                    {" "}
                </div>
            </div>

            {/* Content */}
            <div 
                data-aos="fade-left" 
                data-aos-delay="150"
                data-os-anchor-placement="top-center"
                className="space-y-6 mt-10 lg:mt-0">
                <h3 className="text-2xl font-semibold">
                    Agentic AI Engineer
                </h3>
                <p className="text-rose-500 dark:text-cyan-100 leading-relaxed">
                    I&apos;m an AI‑centric engineer crafting Agentic AI systems and intelligent digital ecosystems. 
                </p>
                <p className="text-blue-600 dark:text-cyan-100 leading-relaxed">
                    Three years in, I&apos;m advancing into AI‑powered mobile experiences, robotics, scalable data systems, 
                    and quantum‑inspired technologies that expand the edge of modern engineering.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    { highlights.map((item) => {
                        return <div key={item.text} className="flex items-center gap-3 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <span className="text-rose-500">
                                    {item.text}
                                </span>
                            </div>                            
                        </div>
                    } 
                )}

                </div>
            </div>
        </div>
        {/* Stats */}
        <div 
            data-aos="zoom-in" 
            data-aos-delay="300"
            data-os-anchor-placement="top-center"
            className="mt-16 w-[80%] mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    return <div key={stat.label} className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
                        <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm text-blue">
                            {stat.label}
                        </div>

                    </div>
                })}
        </div>
      </div>



    </div>
  )
}

export default About;



