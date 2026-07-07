// home.tsx 

"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import ClientReview from './ClientReview/ClientReview';
import Contact from './Contact/Contact';
// import ThemeToggler from '../Helper/ThemeToggler';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {

  useEffect(() => {

    const initAOS = async() => {
      await import('aos');
        AOS.init({
          duration: 1000,
          disable: false,  
          startEvent: 'DOMContentLoaded',  
          animatedClassName: 'aos-animate',  
          useClassNames: false,  
          disableMutationObserver: false,  
          debounceDelay: 50,   
          delay: 0,  
          easing: 'ease',  
          once: true,  
          mirror: false,  
          anchorPlacement: 'top-bottom',  
        });
    };
    initAOS();

  }, [

  ])



  return (
    <div className="overflow-hidden"> 
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  )
}

export default Home;

// Testing Dark - Light Mode Toggle 
// <ThemeToggler/>







