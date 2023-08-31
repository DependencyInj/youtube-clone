import React, { useEffect, useState } from 'react'
import { YOUTUTBE_LIST_API } from '../utils/constants'
import VideoCard from './VideoCard';

import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUTBE_LIST_API);
    const videos = await data.json();
    console.log(videos);
    setVideos(videos.items);
  }

  if (!videos?.length) {
    return null;
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map(item =>
        <Link to={`watch?v=${item.id}`}>
          <VideoCard key={item?.id} video={item} />
        </Link>
      )}
    </div>

  )
}

export default VideoContainer