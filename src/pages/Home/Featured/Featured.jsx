/* eslint-disable no-unused-vars */
import React from 'react'
import SectionTitle from '../../../components/sectionTitle/sectionTitle'
import featuredImg from '../../../assets/assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-10 '>
        <div className=''>
        <SectionTitle subHeading="Check it out" heading="Featured Items" />
        <div className='md:flex justify-center items-center pt-12 pb-20 px-36 bg-slate-900 bg-opacity-60 '>
            <div className=''>
                <img src={featuredImg} alt="featured" />
            </div>
            <div className='md:ml-10 '>
                <p className='text-base font-bold'>Aug 20,2029</p>
                <p className='text-base uppercase'>Where can I get some?</p>
                <p className='text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-0 border-b-4 mt-4  hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none ">
                Read More
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Featured

