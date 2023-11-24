import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import PopularMenu from './PopularMenu/PopularMenu'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Restro. - Home</title>
      </Helmet>
       <Banner/>
      <div className='max-w-screen-xl mx-auto'>
        <Category/>
        <PopularMenu/>
      </div>
        <Featured/>
        <div className='max-w-screen-xl mx-auto'>
        <Testimonials/>
        </div>
    </div>
  )
}

export default Home
