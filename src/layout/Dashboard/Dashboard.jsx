/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaShoppingCart, FaHome, FaAddressBook, FaUtensilSpoon, FaList, FaBook, FaUsers } from "react-icons/fa";
import { MdRateReview, MdOutlinePayments, MdFindInPage } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import useCart from '../../hooks/useCart';

const Dashboard = () => {
  const [cart, refetch] = useCart();
  // admin panel works
  const isAdmin = true; // true for admin panel and false for user panel
  return (
    <div className='flex'>
        <div className="w-64 min-h-screen bg-orange-400">
            <h1 className="text-2xl text-center text-white mt-5">Dashboard</h1>
            <ul className="mt-10 p-4">
                {
                  isAdmin ? <>
                  {/* dedicated */}
                <li className="mb-2"><Link to="/dashboard/adminHome" className="px-4 py-2 text-white bg-orange-500 rounded flex"><FaHome className='text-xl' />Admin Home</Link></li>
                <li className="mb-2"><Link to="/dashboard/add-items" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaUtensilSpoon className='text-xl' />Add Items</Link></li>
                <li className="mb-2"><Link to="/dashboard/manage-items" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaList className='text-xl' />Manage Items</Link></li>
                <li className="mb-2"><Link to="/dashboard/manage-bookings" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaBook className='text-xl' />Manage Bookings</Link></li>
                <li className="mb-2"><Link to="/dashboard/all-users" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaUsers className='text-xl' />All Users</Link></li>
        
                {/* <li className="mb-2"><Link to="/dashboard/order" className="px-4 py-2 flex text-white bg-orange-500 rounded"><MdFindInPage className='text-xl' />Track Order</Link></li> */}
                  </> : 
                  <>
                    {/* dedicated */}
                    <li className="mb-2"><Link to="/" className="px-4 py-2 text-white bg-orange-500 rounded flex"><FaHome className='text-xl' />Home</Link></li>
                    <li className="mb-2"><Link to="/dashboard/carts" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaShoppingCart className='text-xl' />My Cart ({cart.length})</Link></li>
                    <li className="mb-2"><Link to="/dashboard/reservation" className="px-4 py-2 flex text-white bg-orange-500 rounded"><SlCalender className='text-xl' />My Reservation</Link></li>
                    <li className="mb-2"><Link to="/dashboard/payment" className="px-4 py-2 flex text-white bg-orange-500 rounded"><MdOutlinePayments className='text-xl' />Payment</Link></li>
                    <li className="mb-2"><Link to="/dashboard/add-review" className="px-4 py-2 flex text-white bg-orange-500 rounded"><MdRateReview className='text-xl' />Add Review</Link></li>
                    <li className="mb-2"><Link to="/dashboard/booking" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaAddressBook className='text-xl' />My Booking</Link></li>
                    <li className="mb-2"><Link to="/dashboard/order" className="px-4 py-2 flex text-white bg-orange-500 rounded"><MdFindInPage className='text-xl' />Track Order</Link></li>
                  </>
                }
                {/* shared */}
                <div className="py-3 flex items-center text-xs text-white uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">More Options</div>
              
                <li className="mb-2"><Link to="/order/salad" className="px-4 py-2 flex text-white bg-orange-500 rounded"><MdOutlineRestaurantMenu  className='text-xl' />Order Food</Link></li>
                <li className="mb-2"><Link to="/contact-us" className="px-4 py-2 flex text-white bg-orange-500 rounded"><FaSquarePhone  className='text-xl' />Contact</Link></li>
            </ul>
        </div>
        <div className='flex-1 p-8'>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard;
