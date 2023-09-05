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
      top-8 z-20 transition-all
      ${ expanded ? 'left-[210px] w-[calc(100%-210px)] md:w-[calc(100%-210px)]' : 'left-[50px] w-[calc(100%-50px)] md:w-[calc(100%-50px)]'}`}>

      <div className=' px-4 w-full flex justify-between'>
        <Button black={true} icon={AiFillHome} custom='min-w-[30px]'/>
        <div className='flex gap-4'>
          <Button label='sign in' icon={PiSignIn} />
          <Button label={'register'} white={1} icon={BiUserPlus} />
        </div>
      </div>

    </div>
  )
}

export default NavBar