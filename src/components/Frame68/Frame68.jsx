/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame68 = ({
  className,
  rectangle = "/img/rectangle-64.png",
  divClassName,
  text = "カウンセリングとプラン作成",
  divClassNameOverride,
  text1 = "受講前に個別カウンセリングを行い、あなたに最適な学習プランを作成します。",
  text2 = "01",
}) => {
  return (
    <div
      className={`flex w-[1100px] h-[300px] items-center justify-center gap-[50px] px-[50px] py-0 relative top-[122px] left-[780px] bg-[#ffffffcc] rounded-[10px] shadow-[0px_10px_10px_#0000000d] ${className}`}
    >
      <img
        className="relative w-[355px] h-[242px] object-cover"
        alt="Rectangle"
        src={rectangle}
      />

      <div className="flex flex-col h-[228px] items-start gap-5 px-0 py-5 relative flex-1 grow">
        <div className="flex w-[81px] h-[49px] items-center justify-center gap-2.5 px-2.5 py-0 relative bg-[#d2a3cb] rounded-[5px]">
          <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-bold text-white text-3xl tracking-[9.00px] leading-10 whitespace-nowrap">
            {text2}
          </div>
        </div>

        <div
          className={`font-medium text-2xl leading-[normal] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] text-black tracking-[0] ${divClassName}`}
        >
          {text}
        </div>

        <div
          className={`h-[41px] font-normal text-base leading-[27.2px] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] text-black tracking-[0] ${divClassNameOverride}`}
        >
          {text1}
        </div>
      </div>
    </div>
  );
};

Frame68.propTypes = {
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
