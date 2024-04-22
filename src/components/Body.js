import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='flex'>
            <div className='h-screen'>
                <SideBar />
            </div>
            <div className='overflow-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default Body