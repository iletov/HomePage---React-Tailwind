'use client'
import React, { useContext } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { PiSignIn } from 'react-icons/pi'
import { BiUserPlus } from 'react-icons/bi'
import { SideBarContext } from '@/context/Context'
import Button from '../Button'


const NavBar = () => {
  const { expanded } = useContext(SideBarContext)

  return (
    <div className={`
      bg-component shadow-md  flex py-4 px-0 fixed
      top-0 z-20 transition-all
      ${ expanded ? 'left-[210px] w-[calc(100%-210px)] md:w-[calc(100%-210px)]' : 'left-[50px] w-[calc(100%-50px)] md:w-[calc(100%-50px)]'}`}>

      <div className=' px-4 w-full flex justify-between'>
        {/* <Button black={true} icon={AiFillHome} custom='min-w-[30px]'/> */}
        <button className=" flex items-center justify-center gap-2 py-2 px-3 transition-none duration-200 min-w-7 rounded-md hover:bg-opacity-80 bg-[#515659]">
          <AiFillHome size={20}/>
        </button>
        <div className='flex gap-4'>
          <Button label='sign in' icon={PiSignIn} />
          <Button label={'register'} white={1} icon={BiUserPlus} />
        </div>
      </div>

    </div>
  )
}

export default NavBar