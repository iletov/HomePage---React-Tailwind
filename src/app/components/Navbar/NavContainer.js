import { SideBarContext } from '@/context/Context';
import React, { useContext } from 'react'

const NavContainer = ({children}) => {
  const { expanded } = useContext(SideBarContext);
  return (
   <>

   <div className={` flex sm:hidden
      bg-component shadow-md py-4 px-0 fixed
      top-0 z-20 transition-all left-[50px] w-[calc(100%-50px)] md:w-[calc(100%-50px)] `}>
      {children}
    </div>


    <div className={` hidden sm:flex
      bg-component shadow-md py-4 px-0 fixed
      top-0 z-20 transition-all
      ${ expanded ? 'left-[210px] w-[calc(100%-210px)] md:w-[calc(100%-210px)]' : 'left-[50px] w-[calc(100%-50px)] md:w-[calc(100%-50px)]'}`}>
      {children}
    </div>
   </>
  )
}

export default NavContainer