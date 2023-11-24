/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import Swal from 'sweetalert2'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  // logout functionalities
  const handleLogout = () => {
    logOut()
    .then((result) => {
      Swal.fire({
        icon: 'success',
        title: 'Logout Successful',
        text: 'You are logged out successfully!',
      });
    })
    .catch((error) => {
      console.log(error)
    });
  }
  return (
    <div>
      <header className="flex fixed z-10 bg-opacity-30 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 sm:py-0">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold text-white" href="/" aria-label="Brand">Restro.</a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a className="font-medium text-white sm:py-6" href="/" aria-current="page">Home</a>
              <a className="font-medium text-white hover:text-white sm:py-6" href="/menu">Our Menu</a>
              <a className="font-medium text-white hover:text-white sm:py-6" href="/order/salad">Order Food</a>
              <a className="font-medium text-white hover:text-white sm:py-6" href="/contact-us">Contact</a>
              <a className="font-medium text-white hover:text-white sm:py-6" href="/cart">Cart</a>

              
              {
                user ? <>

               <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-2">
         
            <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-8 rounded-full" src={user?.photoURL} alt=""/>
            </div>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-[100000] bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-1 before:left-0 before:w-full before:h-5">
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                {user?.displayName}
              </a>
              {/* <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/my-account">
                My Account
              </a> */}
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/add-jobs">
                Add Jobs
              </a>
  
              
          
              {/* <Link to={`/jobs/${job._id}`} className=""> */}
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/my-jobs">
                My Jobs
              </a>
              {/* </Link> */}
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/applied-jobs">
                Applied Jobs
              </a>
              <a onClick={handleLogout}
               className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
              Logout
            </a>
            
            </div>
          </div>

              {/* <a onClick={handleLogout} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Logout
                  </a> */}

              <a onClick={handleLogout}
               className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
              Logout
            </a>
                
                </> : <>
                   <a className="flex items-center gap-x-2 font-medium text-white hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href="/login">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Log in
              </a>
                </>
              }
             
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
