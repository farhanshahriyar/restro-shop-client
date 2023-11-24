/* eslint-disable no-unused-vars */
import React from 'react';

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, category } = item;
 

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mt-5">
      <img className="w-full h-auto rounded-t-xl" src={image} alt={name} />
      <div className="p-4 md:p-5">
        <p className="mt-1 text-blue-500 dark:text-gray-400">
          {category}
        </p>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {name}
          </h3>
          <h3 className="text-base font-bold text-gray-800 dark:text-white">
            {price} BDT
          </h3>
        </div>
        <p className="mt-1 text-gray-500 dark:text-gray-400" >
            {recipe}
        </p>

      
        <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 uppercase" href="#">
          Add To Cart
        </a>
        </div>
    </div>
    );
}

export default FoodCard;

