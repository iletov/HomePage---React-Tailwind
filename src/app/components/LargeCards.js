import React from "react";
import CardBorderFill from "./CardBorderFill";
import { midCard } from "../dummyData";

const LargeCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
      {midCard.map((item) => (
        <CardBorderFill data={item} key={item.id} />
      ))}
    </div>
  );
};

export default LargeCards;
