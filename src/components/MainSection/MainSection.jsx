import React, { createContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import VideosSection from "../VideosSection/VideosSection";

export const suggestionContext = createContext(null);



const MainSection = () => {
  const [suggestionValue, setSuggestionValue] = useState("random");
  return (
    <suggestionContext.Provider value={{suggestionValue, setSuggestionValue}}>
      <div className="bg-black w-[100%]">
        <Navbar />
        <VideosSection />
      </div>
    </suggestionContext.Provider>
  );
};

export default MainSection;
