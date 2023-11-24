/* eslint-disable no-unused-vars */
import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
  return (
    <Parallax
        blur={{ min: -15, max: 15 }} // Adjusted blur for a subtle effect
        bgImage={img}
        bgImageAlt="the menu"
        strength={200} // Positive strength for parallax effect
    >
      <div className="hero h-[700px] flex justify-center items-center">
        
        {/* Added flex, justify-center, and items-center to center the content */}
        <div className="hero-overlay bg-opacity-60"></div>
        {/* Adjusted bg-opacity for better readability */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-black bg-opacity-50 p-10 rounded-lg">
            {/* Added bg-black, bg-opacity-50, p-10, and rounded-lg for the semi-transparent black background */}
            <h1 className="mb-5 text-5xl font-bold uppercase text-white">{title}</h1>
            {/* Added text-white to ensure text is visible on a dark background */}
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            {/* <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border bg-gray-900 text-white border-none  hover:border-red-600 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-red-500 dark:hover:border-red-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Order Now !
            </button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Cover;

