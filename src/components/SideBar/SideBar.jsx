import React from "react";
import SideBarLink from "../SideBarLink/SideBarLink";


const showMore = ()=>{
  document.getElementById("playlists").style.display = "block"
  document.getElementById("showMoreButton").style.display = "none"
}

const showLess = () =>{
  document.getElementById("playlists").style.display = "none"
  document.getElementById("showMoreButton").style.display = "block"
}


const SideBar = () => {
  return (
    <div className="w-[235px] bg-black h-[100vh] fixed hidden sm:block">
      <div className="text-white flex gap-4 h-[60px] pl-7 items-center fixed bg-black">
        <span class="material-symbols-outlined rounded-full hover:bg-slate-800 p-2 cursor-pointer">menu</span>
        <div className="h-[40px] w-[100px] pt-2">
          <img
            className=" w-[100%] object-cover"
            src="logo2.png"
            alt="logo"
          />
        </div>
        
      </div>
      <div className="flex flex-col text-[15px] mt-[60px] h-[calc(100vh-62px)] overflow-y-auto">
        <SideBarLink name="Home" icon="home" />
        <SideBarLink name="Shorts" icon="trending_up" />
        <SideBarLink name="Subscriptions" icon="library_add_check" />
        <hr className="border-gray-600 m-3"/>
        <SideBarLink name="Library" icon="library_books" />
        <SideBarLink name="History" icon="browse_gallery" />
        <SideBarLink name="Your videos" icon="play_circle" />
        <SideBarLink name="Watch later" icon="schedule" />
        <SideBarLink name="Downloads" icon="download" />
        <SideBarLink name="Liked videos" icon="thumb_up" />
        <div id="showMoreButton" onClick={showMore}><SideBarLink name="Show more" icon="expand_more" /></div>
        
        <div id="playlists" className="hidden">
        <SideBarLink name="Your videos" icon="play_circle" />
        <SideBarLink name="Watch later" icon="schedule" />
        <SideBarLink name="Downloads" icon="download" />
        <SideBarLink name="Liked videos" icon="thumb_up" />
        <div id="showLessButton" onClick={showLess}><SideBarLink name="Show less" icon="expand_less"/></div>
        </div>
        <hr className="border-gray-600 m-4"/>
        <h3 className="text-white pl-8 text-[17px]">Explore</h3>
        <SideBarLink name="Trending" icon="expand_more" />
        <SideBarLink name="Shopping" icon="expand_more" />
        <SideBarLink name="Music" icon="expand_more" />
        <SideBarLink name="Movies" icon="expand_more" />
        <SideBarLink name="Live" icon="expand_more" />
        <SideBarLink name="Gaming" icon="expand_more" />
        <SideBarLink name="News" icon="expand_more" />
        <SideBarLink name="Sports" icon="expand_more" />
        <SideBarLink name="Learning" icon="expand_more" />
        <SideBarLink name="Fashion & Beauty" icon="expand_more" />
        <SideBarLink name="Podcasts" icon="expand_more" />
        <SideBarLink name="Playables" icon="expand_more" />
        <hr className="border-gray-600 m-4"/>
        <h3 className="text-white pl-8 pb-3 text-[17px]">More from YouTube</h3>
        <SideBarLink name="YouTube Premium" icon="expand_more" />
        <SideBarLink name="YouTube Studio" icon="expand_more" />
        <SideBarLink name="YouTube Music" icon="expand_more" />
        <SideBarLink name="YouTube Kids" icon="expand_more" />
        <hr className="border-gray-600 m-4"/>
        <SideBarLink name="Settings" icon="expand_more" />
        <SideBarLink name="Report history" icon="expand_more" />
        <SideBarLink name="Help" icon="expand_more" />
        <SideBarLink name="Send feedback" icon="expand_more" />
        <hr className="border-gray-600 m-4"/>
        <div className="pl-8 flex flex-col gap-3">
      <div className="text-white text-[13px] cursor-pointer">
        <p>About Press Copyright</p>
        <p>Contact us Creators</p>
        <p>Advertise Developers</p>
      </div>
      <div className="text-white text-[13px] cursor-pointer">
        <p>Terms Privacy Policy & Safety</p>
        <p>How YouTube works</p>
        <p>Test new features</p>
        
      </div>
      
      </div>
      <p className="text-gray-500 text-xs pt-4 pb-2 pl-8 ">c 2023 Google LLC</p>

      </div>
      
      
    </div>
  );
};

export default SideBar;
