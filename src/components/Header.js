import React from 'react';

const Header = () => {
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-8' alt='menu' src='https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg' />
                <img className='h-8 mx-2' alt='youtube-logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png'} />
            </div>
            <div className='col-span-10 px-40'>
                <input className='w-96 border border-gray-400 p-1 px-4 rounded-l-full' type='text' />
                <button className='border border-gray-400 p-1 rounded-r-full h-8'>Search
                    {/* <img className='' alt='search' src='https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-search-icon-png-image_966647.jpg'/> */}
                </button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            </div>
        </div>
    )
}

export default Header