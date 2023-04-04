import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { RootState } from '../store/store';
const Navbar = () => {
  const cart=useSelector((state:RootState)=>state.cart.cart)
  return (
    <header className="sticky body-font bg-slate-900 text-white">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl text-white">001Store</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to ="/" className="mr-5 hover:text-blue-400 cursor-pointer">Home</Link>
        <a className="mr-5 hover:text-blue-400 cursor-pointer">About</a>
        <a className="mr-5 hover:text-blue-400 cursor-pointer">Contact</a>
      </nav>
      <Link to={"/cart"} className="text-white inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">cart {cart.length}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  </header>
  )
}

export default Navbar
