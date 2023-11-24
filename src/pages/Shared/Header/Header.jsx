/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import Swal from 'sweetalert2'

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

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


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="flex fixed bg-opacity-30 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 sm:py-0">
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

              
              {user ? (
                <>
                      {/* <a className="font-medium text-white hover:text-white sm:py-6" href="/cart">Admin Dashboard</a> */}
                      <div className="relative inline-block text-left" ref={dropdownRef}>
                        <div className="flex items-center cursor-pointer">
                            <img className="h-8 rounded-full w-9" src={user?.photoURL} alt="" />
                        </div>
                         
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <p className="font-medium text-white hover:text-white sm:py-6">{user?.displayName}</p>
                        </div>

                        <a onClick={handleLogout} className="block px-4 py-2 text-sm bg-slate-200 rounded-md cursor-pointer text-gray-700 hover:bg-gray-100">
                                    Logout
                         </a>
                </>
            ) : (
              <a className="flex items-center gap-x-2 font-medium text-white hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6" href="/login">
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Log in
              </a>
          )}
             
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
