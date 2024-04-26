import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { thumbnails, title, description, channelTitle } = snippet;

  console.log("ssss", video);
  return (
    <div className="child:hover:rounded-none w-[402px] cursor-pointer">
      <img
        className="rounded-xl  h-52"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <div className="flex">
        <div className="my-3 mr-3">
          <img
            className="h-8"
            alt="user"
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          />
        </div>
        <div>
          <ul className="child: py-2">
            <li className="font-bold text-lg">{title.length > 30? `${title.slice(0,30)}...`: title}</li>
            <li className="text-gray-400">{channelTitle.length > 15? `${channelTitle.slice(0,15)}...`: channelTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
