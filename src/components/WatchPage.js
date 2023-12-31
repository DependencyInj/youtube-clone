import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [urlSearchParams] = useSearchParams();
  console.log(urlSearchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu())
  }, []);

  return (
    <div className='px-5 '>
      <iframe  className="rounded-xl" width="900" height="500" src={`https://www.youtube.com/embed/${urlSearchParams.get("v")}?si=9JFYb3BLXqVJLTdf`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default WatchPage;