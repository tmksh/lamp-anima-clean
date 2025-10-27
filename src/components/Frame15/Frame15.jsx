/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame15 = ({
  className,
  rectangle = "/img/rectangle-5.png",
  divClassName,
  text = "ベーシックコース",
  divClassNameOverride,
  text1 = "初心者のコース。マシンピラティスの基礎知識と基本動作を学び、資格取得に必要なスキルを習得します。1対1のメンター制度を活用しながら、現場での実践力を養います。",
}) => {
  return (
    <div
      className={`flex flex-col w-80 items-center gap-5 p-5 relative top-[57px] left-[50px] bg-[#ffffffcc] ${className}`}
    >
      <img
        className="relative self-stretch w-full h-[185px] object-cover"
        alt="Rectangle"
        src={rectangle}
      />

      <div
        className={`h-[29px] font-medium text-2xl text-center leading-[normal] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] text-black tracking-[0] ${divClassName}`}
      >
        {text}
      </div>

      <div
        className={`font-normal text-base leading-[27.2px] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] text-black tracking-[0] ${divClassNameOverride}`}
      >
        {text1}
      </div>
    </div>
  );
};

Frame15.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
