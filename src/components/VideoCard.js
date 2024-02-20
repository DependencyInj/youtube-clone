import React from 'react'

const VideoCard = ({video}) => {
  const {snippet, statistics} = video;
  const {thumbnails, title, description, channelTitle} = snippet;
  // const {viewCount} = statistics;

  console.log("ssss", video);
  return (
    <div className='m-5 child:hover:rounded-none w-72 cursor-pointer'>
      <img className='rounded-xl  h-52' alt='thumbnail' src={thumbnails?.medium?.url} />
      <ul className='child: py-2'>
        <li className='font-bold text-lg'>{title}</li>
        <li className="text-gray-400">{channelTitle}</li>
        {/* <li>{viewCount} views</li> */}
      </ul>
    </div>
  )
}

export default VideoCard;