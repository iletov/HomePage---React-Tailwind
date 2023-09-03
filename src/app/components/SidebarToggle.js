'use client'
import Image from "next/image";
import React, { createContext, useContext, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const SideBarContext = createContext()

const SidebarToggle = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen fixed">
      <nav className="h-full flex flex-col bg-component shadow-md">
        <div className="pl-4 py-6 flex justify-between items-center gap-1">
          <Image 
            src="/logoipsum.svg" 
            width={120} 
            height={100} 
            alt="" 
            className={`overflow-hidden transition-all
            ${expanded ? ' w-44 pr-4' : 'w-0'}`}
            />

          <button onClick={() => setExpanded(prev => !prev)} className="p-1.5 rounded-lg bg-gray-700 hover:opacity-80 absolute right-2">
            {expanded 
              ? <AiOutlineArrowLeft size={24} />
              : <AiOutlineArrowRight size={24}/>
            }
          </button>
        </div>
        
        <SideBarContext.Provider value={{expanded}}>
          <div className="flex-1 pl-3">
            {children}
          </div>
        </SideBarContext.Provider>
      </nav>
    </aside>
  );
};

export default SidebarToggle;

export const SidebarItem = ({icon, text}) => {
  const { expanded } = useContext(SideBarContext)

  return (
    <Link href={'#'} className=" hover:text-teal-400 relative gap-3 text-slate-100 flex items-center py-2 px-1 my-1 font-medium cursor-pointer group">
      {icon}
      <span
        className={`transition-all overflow-hidden 
        ${expanded ? "w-40" : "w-0"}
        `}
      >
        {text}
      </span>

      {/* {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-3 ml-4
           text-[#1F2225] bg-teal-400 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )} */}
    </Link>
  )
}

