import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { marquee } from "../../dummyData";
import { TfiAnnouncement } from 'react-icons/tfi'

const SmallNav = () => {
  return (
    <div
      className='
      h-8 bg-component text-teal-400 px-0 flex z-20 left-[50px] w-[calc(100%-50px)] md:w-[calc(100%-50px)] 
      items-center justify-center text-center text-small md:text-base cursor-pointer fixed
     '
    >
      <Marquee speed={30}>
        <div className="relative">
        <div className="absolute inset-2 bg-teal-400 blur opacity-30"></div>
        <div className="flex gap-3 items-center mx-5">
          <TfiAnnouncement size={20}/>
          <p>{marquee.title}</p>
        </div>

        </div>
      </Marquee>
    </div>
  );
};

export default SmallNav;
