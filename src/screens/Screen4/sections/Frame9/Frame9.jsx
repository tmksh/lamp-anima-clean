import React from "react";

export const Frame9 = () => {
  return (
    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
      <div className="relative w-[1280px] h-[500px]">
        <img
          className="absolute top-0 left-0 w-[1280px] h-[400px]"
          alt="Rectangle"
          src="/img/rectangle-60-3.png"
        />

        <div className="flex flex-col w-[600px] items-center justify-center px-[150px] py-[25px] absolute top-[340px] left-[calc(50.00%_-_300px)] bg-[#fcfbf9] rounded-[10px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-medium text-[#111111] text-5xl tracking-[0] leading-[normal]">
            講師紹介
          </div>

          <div className="relative w-fit [font-family:'Allura',Helvetica] font-normal text-[#d2a3cb] text-[32px] tracking-[0] leading-[normal]">
            Meddon
          </div>
        </div>
      </div>
    </div>
  );
};
