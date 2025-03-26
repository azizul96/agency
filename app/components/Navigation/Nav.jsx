import Link from 'next/link';
import React from 'react';
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import Bars3BottomRightIcon, { Bars3BottomLeftIcon } from "@heroicons/react/24/solid"
const Nav = ({openNav}) => {



  return (
    <div>
      <div className='h-[12vh] bg-white shadow-md'>
        <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh] '>
          <h1 className='text-base md:text-2xl font-bold text-slate-800'  >
            <span className='text-2xl md:text-4xl text-red-600'>D</span>
            Alpha.
          </h1>
          <ul className='hidden lg:flex items-center space-x-10'>
            <li className='text-base font-bold cursor-pointer text-red-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='text-base font-bold cursor-pointer hover:text-red-500 transition-all duration-200'>
              <Link href="/">About</Link>
            </li>
            <li className='text-base font-bold cursor-pointer hover:text-red-500 transition-all duration-200'>
              <Link href="/">Service</Link>
            </li>
            <li className='text-base font-bold cursor-pointer hover:text-red-500 transition-all duration-200'>
              <Link href="/">Customer</Link>
            </li>
            <li className='text-base font-bold cursor-pointer hover:text-red-500 transition-all duration-200'>
              <Link href="/">Blog</Link>
            </li>
          </ul>

          <div className='flex items-center space-x-2 md:space-x-5'>
            <ButtonBlue text="Login"/>
            <ButtonRed text="Sign Up"/>
            <Bars3BottomLeftIcon onClick={openNav} className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer'/>


          </div>
        </div>

      </div>
    </div>
  );
};

export default Nav;