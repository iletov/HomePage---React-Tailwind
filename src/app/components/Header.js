import React from "react";

const Header = ({ title, icon: Icon, custom, iconSize }) => {
  return (
    <div
      className="
      mb-5
      md:text-xl 
      lg:text-2xl 
      flex 
      gap-2 
      items-center
      "
      >
      <div className={`${custom ? custom : ""}`}>
        {Icon && <Icon size={`${iconSize ? iconSize : ''}`} />}
      </div>
      {title}
    </div>
  );
};

export default Header;
