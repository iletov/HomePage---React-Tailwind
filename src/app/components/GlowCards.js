import React from "react";
import { smallCard } from "../dummyData";
import CardBorderFill from "./CardBorderFill";

const GlowCards = () => {
  return (
    <div
      className="
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 border-b border-[#1F2225] pb-10"
    >
      {smallCard.map((item) => (
        <CardBorderFill data={item} key={item.id} />
      ))}
    </div>
  );
};

export default GlowCards;
