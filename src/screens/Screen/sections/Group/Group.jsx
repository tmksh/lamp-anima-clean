import React from "react";

export const Group = () => {
  return (
    <div className="relative w-full max-w-[1280px] h-auto min-h-[400px] md:min-h-[500px] pt-[77px]">
      <img
        className="top-0 w-full h-[300px] md:h-[400px] absolute left-0 object-cover"
        alt="Rectangle"
        src="/img/rectangle-60.png"
      />

      <div className="flex flex-col w-[90%] max-w-[600px] items-center justify-center px-6 md:px-[150px] py-[25px] absolute top-[240px] md:top-[340px] left-[50%] -translate-x-1/2 bg-[#fcfbf9] rounded-[10px]">
        <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-medium text-[#111111] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal] text-center whitespace-nowrap">
          養成カリキュラム
        </div>

        <div className="relative w-fit [font-family:'Allura',Helvetica] font-normal text-[#d2a3cb] text-2xl md:text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
          Curriculum
        </div>
      </div>
    </div>
  );
};
