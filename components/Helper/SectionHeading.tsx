// components/Helper/SectionHeading.tsx 

import React from 'react';

type Props = {
    title_1: string;
    title_2: string;
    description: string;
};

const SectionHeading = ({ description, title_1, title_2 }: Props) => {
  return (
    <div className="text-center mt-8 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title_1} {' '}

        <span className="text-purple-700">{title_2}</span>
      </h2>
      <p className="
      max-w-2xl mx-auto
      bg-linear-to-r from-green-950 via-amber-800 to-red-500
      dark:bg-linear-to-r dark:from-rose-600 dark:via-green-300 dark:to-lime-400
      bg-clip-text text-transparent
      ">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading;










