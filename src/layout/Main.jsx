/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'
import Header from '../pages/Shared/Header/Header'


const Main = () => {
  const location = useLocation();
  // console.log(location)
  // const noHeaderFooter = ['/login', '/register', '*'];
  // if(noHeaderFooter.includes(location.pathname)) return <Outlet/>
  const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/sign-up') || location.pathname.includes('*');

  return (
    <div>
        {!noHeaderFooter && <Header/>}
       {/* <Header/> */}
       <Outlet/>
       {!noHeaderFooter && <Footer/>}
       {/* <Footer/> */}
    </div>
  )
}

export default Main
