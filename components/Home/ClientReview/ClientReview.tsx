// components/Home/ClientReview/ClientReview.tsx

"use client";

import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import Carousel from 'react-multi-carousel';
import ReviewCard from './ReviewCard';
import { userReviewData } from '@/data';



const ClientReview = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <SectionHeading 
            title_1='Our Client'
            title_2='Review'
            description='Checkout our client reviews'
        />

        <div className="mt-14">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            arrows={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
          >
            
            {
              userReviewData.map((user) => {
                return <div 
                  data-aos="zoom-in" 
                  data-aos-delay="300"
                  data-os-anchor-placement="top-center" 
                  key={user.id}>
                  <ReviewCard 
                  user={user}
                  />
                </div>
              })
            }
            



          </Carousel>
        </div>

      </div>
    </div>
  )
}

export default ClientReview








