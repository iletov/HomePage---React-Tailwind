import Image from "next/image";
import React from "react";

const CardBorderFill = ({data}) => {
  return (
    <div className="flex flex-col gap-5 relative group ">
    
    {/* GLOW EFFECT */}
    <div className="absolute inset-0 bg-teal-400 rounded-xl opacity-60 group-hover:-inset-1 group-hover:blur transition duration-100"></div>
    
    {/* CARD WRAPPER */}
    <div className="
        col-span-1 p-6 cursor-pointer rounded-md 
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
        <div className="w-full mt-5 text-left text-white uppercase font-semibold text-lg">
          {data.title}
        </div>
      </div>

      {/* BOTTOM GLOW */}
      <div className=" absolute w-full left-0 bottom-0 h-32 bg-gradient-to-b from-teal-400/0 via-teal-400/20 via-teal-/30 to-teal-400/60 group-hover:block transition-all duration-200 hidden  rounded-b-md"></div>
    </div>
    </div>

  );
};

export default CardBorderFill;
