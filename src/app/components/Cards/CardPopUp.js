import Image from "next/image";
import React from "react";
import BlurEffect from "../BlurEffect";
import Button from "../Button";


const CardPopUp = ({data}) => {
  return (
    <div className="flex relative gap-5 hover:scale-105 transition">
      <div className=" rounded-md text-center bg-component w-full h-64 flex flex-col pl-4">
        
        {/* IMAGE */}
        <div className=" absolute w-2/5 h-full -top-5">
          <Image 
            src={data.image}
            alt=""
            fill
            className="w-full h-full "
          />
        </div>

        <div className=" w-3/5 px-4 my-10 h-full self-end flex flex-col justify-around items-center">

          {/* TITLE */}
          <div className=" uppercase text-2xl font-bold">
            {data.title}
          </div>

          {/* DESC */}
          <div className=" text-xs font-extralight md:text-sm lg:text-base">
            {data.desc}
          </div>

          {/* BUTTON */}
          {/* <Button label={'Join Now'} white={true} custom={'w-[100px] z-10'} /> */}
          <button className="flex items-center justify-center bg-white hover:opacity-80 z-10 w-24 px-3 py-2 text-[#1F2225] text-xs sm:text-base font-semibold rounded-md">Enter</button>
        </div>
        <BlurEffect height={' h-24'} bgColor={'from-[#1F2225]/20 via-[#1F2225]/60 to-[#1F2225]/100'} />
      </div>
    </div>
  );
};

export default CardPopUp;
