import React from "react";

import CardBorderFill from "./CardBorderFill";
import { smallCard } from "@/app/dummyData";

const GlowCards = () => {
  return (
    <div
      className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 border-b border-[#1F2225] pb-10"
    >
      {smallCard.map((item) => (
        <CardBorderFill data={item} key={item.id} />
      ))}
    </div>
  );
};

export default GlowCards;
