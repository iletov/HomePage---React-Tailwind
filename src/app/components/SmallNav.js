import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { marquee } from "../dummyData";
import { TfiAnnouncement } from 'react-icons/tfi'

const SmallNav = () => {
  return (
    <div
      className="
      h-8 bg-background text-teal-400 px-4 left-[20%] flex w-[80%] z-20 
      items-center justify-center text-center text-small md:text-base cursor-pointer fixed"
    >
      <Marquee speed={30}>
        <div className="relative">
        <div className="absolute inset-2 bg-teal-400 blur opacity-30"></div>
        <div className="flex gap-3 items-center">
          <TfiAnnouncement size={20}/>
          <p>{marquee.title}</p>
        </div>

        </div>
      </Marquee>
    </div>
  );
};

export default SmallNav;
