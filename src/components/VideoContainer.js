import React, { useEffect, useState } from 'react'
import { YOUTUTBE_LIST_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';


import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const searchQuery = useSelector(store => store.searchQuery.searchQuery);


  useEffect(() => {
    getVideos();
  }, [searchQuery]);

  const getVideos = async () => {
    let url = YOUTUTBE_LIST_API;
    if(searchQuery.length > 0){
      url = `${url}&q=${searchQuery}`
    }
    const data = await fetch(url);
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