'use client'
import React, { useContext } from "react";
import { SideBarContext } from "@/context/Context";

const CardContainer = ({children}) => {
  const { expanded } = useContext(SideBarContext)

  return (
    <>

    <div className={`block sm:hidden bg-background text-slate-100 flex-grow p-4 transition-all
          pl-[100px] pr-[20px] pt-[130px] `}>
      {children}
    </div>

    <div className={`hidden sm:block bg-background text-slate-100 flex-grow p-4 transition-all
    ${ expanded ? 'pl-[260px] pr-[20px] pt-[130px]' : 'pl-[100px] pr-[20px] pt-[130px]' } `}>
      {children}
    </div>
    </>
  )
}

export default CardContainer