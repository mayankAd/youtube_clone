import React, { useContext, useState } from "react";
import RecommendationList from "../RecommendationList/RecommendationList";
import { suggestionContext } from "../MainSection/MainSection";



const Navbar = () => {

  const [searchValue, setSearchValue] = useState("")

  const data = useContext(suggestionContext);

  const search = () =>{
    data.setSuggestionValue(searchValue)
  }

  return (
    <div className=" h-[111px] bg-black sm:w-[calc(100%-235px)] sm:ml-[235px] fixed flex flex-col gap-[18px]">
      <div className="flex sm:justify-between sm:gap-8 gap-20">
        <div className="h-[50px] w-[100px] pt-4 sm:hidden ml-8">
          <img src="logo2.png" className="w-[100%] object-cover" alt="" />
        </div>
        <div className="bg-black flex justify-center pt-2 sm:pl-[210px]">
          <div className=" flex w-[200px] sm:w-[600px] border border-gray-700 bg-black rounded-full ">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-[100%] rounded-l-full p-2 text-white pl-6 border_gray-400"
              onChange={(e)=>{
                setSearchValue(e.target.value)
              }}
            />

            <p class="material-symbols-outlined pl-4 pt-1 text-white font-thin text-2xl w-[67px] bg-gray-800 rounded-r-full cursor-pointer hover:bg-slate-700" onClick={search}>
              search
            </p>
          </div>
          <div className=" rounded-full bg-slate-800 flex justify-center items-center h-10 w-10 ml-4">
            <p class="material-symbols-outlined text-white ">mic</p>
          </div>
        </div>

        <div className="sm:flex gap-7 pt-2 pr-10 items-center hidden">
          <p class="material-symbols-outlined text-white ">video_call</p>
          <p class="material-symbols-outlined text-white ">notifications</p>
          <div className=" rounded-full bg-slate-400 h-8 w-8 flex justify-center items-center">
            <img
              src="user.png"
              className="h-[80%] w-[80%] object-contain overflow-hidden"
              alt=""
            />
          </div>
        </div>
      </div>
    <RecommendationList/>
    </div>
  );
};

export default Navbar;
