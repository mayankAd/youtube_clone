import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingVideosSection from "../LandingVideosSection/LandingVideosSection";
import SearchResultsSection from "../SearchResultsSection.jsx/SearchResultsSection";

const VideoSectionRouter = createBrowserRouter([
  { path: "", Component: LandingVideosSection },
  { path: "/search", Component: SearchResultsSection },
]);

const VideosSection = () => {
  return (
    <>
      <div className=" sm:ml-[235px] mt-[111px] bg-black h-[calc(100vh-112px)]">
        <RouterProvider router={VideoSectionRouter} />
      </div>
    </>
  );
};

export default VideosSection;
