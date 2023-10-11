import React from "react";

const VideoCard = (props) => {
  return (
    <div className="w-[400px] bg-transparent mb-4">
      <div className="h-[210px] w-[100%]">
        <img
          src={props.image}
          className=" h-[100%] w-[100%] object-cover rounded-xl"
          alt=""
        />
      </div>
      <div className="flex pt-3 gap-5 text-white">
        <div className="h-[35px] w-[35px] rounded-full bg-slate-200">
          <img
            className="h-[100%] w-[100%] object-fill rounded-full"
            src="user.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-[16px] font-medium">{props.title}</h2>
          <div className="text-[13px] text-gray-400">
            <p >{props.channelTitle}</p>
            <p>100k views . 1 year ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
