// components/Home/Project/Project.tsx 

import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { projects } from '@/data';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1='Featured'
        title_2='Projects'
        description='A selection of my recent work and side projects'
      />
      <div 
        data-aos="zoom-out" 
        data-aos-delay="200"
        data-os-anchor-placement="top-center" 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {
            projects.map((project, index) => {
                return <div 
                data-aos="flip-right" 
                data-aos-delay={index*100}
                data-os-anchor-placement="top-center" 
                key={index}>
                    <ProjectCard 
                    {...project}
                    />
                </div>
            })
        }

      </div>
    </div>
  )
}

export default Project


















