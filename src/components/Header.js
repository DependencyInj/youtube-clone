import React from 'react';
import search from '../../src/assets/images/search-interface-symbol.png'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/navSlice';

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    toggleMenuHandler();

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt='menu' src='https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg' />
                <img className='h-8 mx-2' alt='youtube-logo' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png'} />
            </div>
            <div className='flex w-auto'>
                <input className='border border-gray-400 rounded-l-full w-4/6 p-1' type='text' />
                <button className='border border-gray-400 rounded-r-full w-10 p-1'>
                    <img className='h-5' alt='search' src={search} />
                </button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' />
            </div>
        </div>
    )
}

export default Header