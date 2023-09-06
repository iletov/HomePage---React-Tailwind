import Image from 'next/image'
import React from 'react'
import Button from './Button'
import BlurEffect from './BlurEffect'
import { Hero } from '../dummyData'


const data = Hero;

const HeroBanner = () => {

  return (
    <div className="flex relative mb-5">

      <div className={` bg-center bg-[url('/tealbg.jpg')] 
        rounded-md text-center w-full h-64 flex flex-col pl-4`}>
        <div className=" w-1/3 md:w-2/3 lg:w-2/4 px-0 ml-2 my-10 h-full self-start flex flex-col justify-around items-center">

          {/* TITLE */}
          <div className=" text-base font-bold text-[#1F2225] uppercase md:text-2xl  lg:text-2xl">
            {data.title}
          </div>
          {/* DESC */}
          <div className=" hidden sm:block sm:text-sm sm:font-light text-white capitalize">
            {data.desc}
          </div>

          {/* BUTTON */}
          <button className="flex items-center justify-center bg-white hover:opacity-80 z-10 min-w-24 px-3 py-2 text-[#1F2225] text-xs sm:text-base font-semibold rounded-md">Join Now</button>
       
            {/* <Button label={'Join'} white={true} custom={'hidden sm:block min-w-[30px] md:w-[100px] z-10 '} /> */}
        </div>

          {/* IMAGE */}
        <div className=" absolute w-1/2 md:w-1/3 h-[130%] -top-2 md:-top-5 right-3 md:right-20">
          <Image 
            src={data.image}
            alt=""
            fill
            className="w-full h-full "
          />
        </div>
        <BlurEffect height={' h-24'} bgColor={'from-[#54A2AE]/0 via-[#54A2AE]/80 to-[#54A2AE]/100'} />
      </div>

    </div>
  )
}

export default HeroBanner