import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className=' '>
      <header className='flex h-20 justify-evenly items-center bg-slate-300'>
        <div>
       <Link to={'/'}> <h2 className='capitalize text-slate-800 text-2xl font-bold cursor-pointer'>SaftyLand</h2></Link>
        </div>
        <div className='bg-white h-11 rounded-2xl p-4 flex items-center'>
            <input  type="text" className='w-22 sm:w-72 bg-transparent outline-none' placeholder='search here' />
            <CiSearch className='text-[23px]'/>
        </div>
        <div>
            <ul className='flex gap-3 items-center text-slate-800'>
               <Link to={'/'}> <li className='hidden sm:inline font-semibold text-[1.2rem] cursor-pointer'>Home</li></Link>
               <Link to={'/about'}><li className='hidden sm:inline font-semibold text-[1.2rem] cursor-pointer'>About</li></Link>
               <Link to={'/sign-in'}><li className='font-semibold text-[1.2rem]'>Sign-in</li></Link>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
