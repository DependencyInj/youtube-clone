import React from 'react'

const SideBar = () => {
  return (
    <div className='shadow-2xl p-4 col-span-1 child:pt-2'>
      <div>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
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
  )
}

export default SideBar