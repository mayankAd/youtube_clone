import React from "react";

const VideoCard = (props) => {
  return (
    <a href = {`https://www.youtube.com/watch?v=${props.videoLinkId}`} target="_blank">
    <div className="w-[400px] bg-transparent mb-4">
      <div className="h-[210px] w-[100%]">
        <img
          src={props.image}
          className=" h-[100%] w-[100%] object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="flex pt-3 gap-5 bg-black text-white w-[100%]">
        <div className="h-[100%] w-[50px] rounded-full">
          <div className="h-[40px] w-[40px] rounded-full bg-white">
          <img
            className="w-[100%] h-[100%] object-cover rounded-full"
            src={props.image}
            alt=""
          />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-100%">
          <h2 className="text-[16px] font-medium">{props.title}</h2>
          <div className="text-[13px] text-gray-400">
            <p >{props.channelTitle}</p>
            <p>100k views . 1 year ago</p>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
};

export default VideoCard;
