import React from "react";
import ImgLogo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-2">
        <div className="w-12">
          <img src={ImgLogo} alt="" />
        </div>
        <div className="text-[25px] font-bold text-[#8E6447]">Konis</div>
      </div>
    </Link>
  );
}

export default Logo;
