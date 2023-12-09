import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col'>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer;