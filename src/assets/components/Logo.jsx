import React from "react";
import ImgLogo from "../img/logo.png";

function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-[100px]">
        <img src={ImgLogo} alt="" />
      </div>
      <div className="text-[25px] font-bold text-[#8E6447]">Konis</div>
    </div>
  );
}

export default Logo;
