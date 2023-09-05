import Image from "next/image";
import React from "react";
import BlurEffect from "../BlurEffect";

const CardBorderFill = ({data}) => {
  return (
    <div className="flex flex-col gap-0 relative group">
    
    {/* GLOW EFFECT */}
    <div className="absolute inset-0 bg-teal-400 rounded-xl opacity-60 group-hover:-inset-1 group-hover:blur transition duration-100"></div>
    
    {/* CARD WRAPPER */}
    <div className="
        col-span-1 p-2 cursor-pointer rounded-md 
        text-center text-sm relative
         bg-gradient-to-b from-[#303134] to-[#1F2225]   
        "
    >

      {/* CARD IMAGE */}
      <div className="aspect-square overflow-hidden relative w-full">
        <Image
          src={data.image}
          alt=""
          fill
          className="w-full h-full object-contain"
        />
      </div>

      {/* CARD TITLE */}
      <div className=" relative">
        <div className=" absolute bottom-0 w-full mt-5 text-center z-10 text-white uppercase font-semibold text-sm md:text-base">
          {data.title}
        </div>
      </div>

      {/* BOTTOM GLOW */}
      <BlurEffect bgColor={'from-[#202124]/0 via-[#202124]/60 to-[#202124]/100'} height={'h-32'}/>
      <BlurEffect hidden={true} bgColor={'from-teal-400/0 via-teal-400/20 to-teal-400/60'} height={'h-32'}/>
    </div>
    </div>

  );
};

export default CardBorderFill;
