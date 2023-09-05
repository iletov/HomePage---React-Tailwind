import Image from 'next/image'
import React from 'react'
import Button from './Button'
import BlurEffect from './BlurEffect'
import { Hero } from '../dummyData'

const data = Hero

const HeroBanner = () => {

  return (
    <div className="flex relative gap-5">
      <div className=" rounded-md text-center w-full h-64 flex flex-col pl-4 bg-teal-400">
        <div className=" w-1/3 md:w-1/3 lg:w-2/4 px-0 ml-2 my-10 h-full self-start flex flex-col justify-around items-center">

          {/* TITLE */}
          <div className=" text-base font-bold text-[#1F2225] uppercase md:text-2xl  lg:text-4xl">
            {data.title}
          </div>

          {/* BUTTON */}
          <Button label={'Join'} white={true} custom={'min-w-[30px] md:w-[100px] z-10 '} />
        </div>

          {/* IMAGE */}
        <div className=" absolute w-1/2 md:w-2/3 h-[130%] -top-2 md:-top-5 right-4 md:right-10">
          <Image 
            src={data.image}
            alt=""
            fill
            className="w-full h-full "
          />
        </div>
        <BlurEffect height={' h-24'} bgColor={'from-teal-400/0 via-teal-400/80 to-teal-400/100'} />
      </div>
    </div>
  )
}

export default HeroBanner