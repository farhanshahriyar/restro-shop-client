/* eslint-disable no-unused-vars */
import React from 'react'

const MenuItem = ({item}) => {
    const  {name, price, recipe, image} = item;
  return (
    <div className='flex space-x-4'>
       <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px] h-[120px] sm:w-[150px]  sm:h-[150px]' src={image} alt={name}/>
       <div>
            <h3 className='text-base uppercase'>{name}----------</h3>
            <p className='text-gray-500'>{recipe}</p>
       </div>
       <p className='text-base font-bold text-yellow-500'>BDT{price}</p>
    </div>
  )
}

export default MenuItem
