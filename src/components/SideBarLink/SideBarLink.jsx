import React from "react";

const SideBarLink = (props) => {
  return (
    <div className="text-white font-normal flex gap-6 pl-4 cursor-pointer">
      <div className="flex hover:bg-slate-900 h-[40px] w-[200px] items-center rounded-[10px] gap-5">
        <span class="material-symbols-outlined pl-3 ">{props.icon}</span>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default SideBarLink;
