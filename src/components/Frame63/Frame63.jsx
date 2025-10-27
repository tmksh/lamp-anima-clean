/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame63 = ({
  className,
  divClassName,
  text = "分割払いは可能ですか？",
  divClassNameOverride,
  text1 = "はい、分割払いに対応しております。詳しくはお支払いプランについては、お問い合わせください。",
  frameClassName,
  divClassName1,
}) => {
  return (
    <div
      className={`flex-col w-[1000px] items-center gap-5 p-10 top-[178px] left-[1940px] bg-[#ffffffcc] rounded-[10px] shadow-[0px_10px_10px_#0000000d] flex relative ${className}`}
    >
      <div
        className={`flex w-[900px] items-start gap-[30px] relative flex-[0_0_auto] ${frameClassName}`}
      >
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-bold text-[#d2a3cb] text-[32px] tracking-[0] leading-8 whitespace-nowrap ${divClassName1}`}
        >
          Q
        </div>

        <div className="flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-1 grow">
          <div
            className={`font-semibold relative flex-1 mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] text-black text-base tracking-[0] leading-[27.2px] ${divClassName}`}
          >
            {text}
          </div>
        </div>
      </div>

      <img
        className="relative w-[900px] h-px object-cover"
        alt="Line"
        src="/img/line-3.svg"
      />

      <div className="w-[900px] items-start gap-[30px] flex-[0_0_auto] flex relative">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-bold text-[#dec17a] text-[32px] tracking-[0] leading-8 whitespace-nowrap">
          A
        </div>

        <div className="flex items-center justify-center gap-2.5 px-0 py-[3px] relative flex-1 grow">
          <div
            className={`font-normal relative flex-1 mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] text-black text-base tracking-[0] leading-[27.2px] ${divClassNameOverride}`}
          >
            {text1}
          </div>
        </div>
      </div>
    </div>
  );
};

Frame63.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
