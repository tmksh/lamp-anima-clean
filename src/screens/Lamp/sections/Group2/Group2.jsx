import React from "react";

export const Group2 = () => {
  return (
    <div className="relative w-[1280px] h-[500px]">
      <img
        className="top-0 w-[1280px] h-[400px] absolute left-0"
        alt="Rectangle"
        src="/img/rectangle-60-4.png"
      />

      <div className="flex flex-col w-[600px] items-center justify-center px-[150px] py-[25px] absolute top-[340px] left-[calc(50.00%_-_300px)] bg-[#fcfbf9] rounded-[10px]">
        <div className="w-fit mt-[-1.00px] font-medium text-[#111111] text-5xl relative [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal]">
          lampの魅力
        </div>

        <div className="relative w-fit [font-family:'Allura',Helvetica] font-normal text-[#d2a3cb] text-[32px] tracking-[0] leading-[normal]">
          fascination
        </div>
      </div>
    </div>
  );
};
