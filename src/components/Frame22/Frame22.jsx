/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Frame22 = ({
  className,
  divClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-start gap-5 w-full max-w-[300px] md:max-w-[320px] relative bg-white shadow-[0px_10px_10px_#0000000d] ${className}`}
    >
      <div className="relative self-stretch w-full h-[150px] md:h-[185px] bg-[#f0eaef]" />

      <div className="flex flex-col items-start gap-3 md:gap-[15px] pt-0 pb-4 md:pb-5 px-4 md:px-5 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#aaaaaa] text-sm md:text-[15px] tracking-[0] leading-[normal] ${divClassName}`}
        >
          2024．09．17
        </div>

        <div
          className={`self-stretch h-auto min-h-[50px] md:min-h-[62px] font-medium text-lg md:text-xl leading-[normal] relative [font-family:'Shippori_Mincho',Helvetica] text-black tracking-[0] ${divClassNameOverride}`}
        >
          タイトルタイトルタイトルタイトルタイ
        </div>

        <div
          className={`w-full font-normal text-sm md:text-[15px] leading-[22px] md:leading-[25.5px] relative [font-family:'Shippori_Mincho',Helvetica] text-black tracking-[0] ${divClassName1}`}
        >
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
      </div>
    </div>
  );
};
