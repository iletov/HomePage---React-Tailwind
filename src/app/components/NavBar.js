import React from 'react'
import Button from './Button'
import { AiFillHome } from 'react-icons/ai'
import { PiSignIn } from 'react-icons/pi'
import { BiUserPlus } from 'react-icons/bi'


const NavBar = () => {
  return (
    <div className='
      bg-background shadow flex py-4 px-3 fixed w-[80%] left-[20%]
      top-8 z-20'>

      <div className=' px-4 w-full flex justify-between'>
        <Button black={true} icon={AiFillHome} custom='min-w-[30px]'/>
        <div className='flex gap-4'>
          <Button label='sign in' icon={PiSignIn}/>
          <Button label={'register'} white={1} icon={BiUserPlus} />
        </div>
      </div>

    </div>
  )
}

export default NavBar