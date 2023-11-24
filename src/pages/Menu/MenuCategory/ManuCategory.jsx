/* eslint-disable no-unused-vars */
import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom'

const ManuCategory = ({items,title, img}) => {
  return (
    <div className='pt-8'>
      {
        title && <Cover img={img} title={title}/>
      }
       
       <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className='justify-center flex'>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-0 border-b-4 mt-4 bg-yellow-400  hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none hover:text-white ">
                Order Now
      </button>
      </Link>
    </div>
  )
}

export default ManuCategory
