import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import homeSvg from '../assets/images/svg/home.svg';
import shortsSvg from '../assets/images/svg/shorts.svg';
import subWhite from '../assets/images/svg/subscriptions-white.svg';
import youWhite from '../assets/images/svg/you-white.svg';

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.nav.isMenuOpen);



  return (
    <div className='shadow-2xl p-1 w-[100px] child:pt-2 '>
      <div>
        <ul>
          <li className='flex justify-center align-middle my-8 mx-5'>
            <div className='flex flex-col gap-2'>
              <img alt="home" className='ml-auto mr-auto w-[24px] h-[24px]' src={homeSvg} />
              <span className='text-[16px]'>Home</span>
            </div>
          </li>
          <li className='flex justify-center align-middle my-8 mx-5'>
            <div className='flex flex-col gap-2'>
              <img alt="home" className='ml-auto mr-auto w-[24px] h-[24px]' src={shortsSvg} />
              <span className='text-[16px]'>Shorts</span>
            </div>
          </li>
          <li className='flex justify-center align-middle my-8 mx-5'>
            <div className='flex flex-col gap-2'>
              <img alt="home" className='ml-auto mr-auto w-[24px] h-[24px]' src={subWhite} />
              <span className='text-[16px]'>Subscriptions</span>
            </div>
          </li>
          <li className='flex justify-center align-middle my-8 mx-5'>
            <div className='flex flex-col gap-2'>
              <img alt="home" className='ml-auto mr-auto w-[24px] h-[24px]' src={youWhite} />
              <span className='text-[16px]'>You</span>
            </div>
          </li>
        </ul>
      </div>
      {
        isMenuOpen && 
        <div>
          <div>
            <hr className='bg-slate-500' />
          </div>
          <div>
            <h2 className='font-bold'>Subscriptions</h2>
            <ul>
              <li>Trending</li>
              <li>Shopping</li>
              <li>Music</li>
              <li>Films</li>
            </ul>
          </div>
          <div>
            <hr className='bg-slate-500' />
          </div>
          <div>
            <h2 className='font-bold'>Explore</h2>
            <ul>
              <li>Trending</li>
              <li>Shopping</li>
              <li>Music</li>
              <li>Films</li>
            </ul>
          </div>
        </div>
      }



    </div>
  )
}

export default SideBar