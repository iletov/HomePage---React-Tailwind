import React from "react";
import CardBorderFill from "./CardBorderFill";
import { midCard } from "@/app/dummyData";
import CardPopUp from "./CardPopUp";


const LargeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
      {midCard.map((item) => (
        <CardPopUp data={item} key={item.id} />
      ))}
    </div>
  );
};

export default LargeCards;
