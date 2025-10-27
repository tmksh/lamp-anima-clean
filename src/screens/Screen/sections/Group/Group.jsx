import React from "react";

export const Group = () => {
  return (
    <div className="relative w-[1280px] h-[500px]">
      <img
        className="top-0 w-[1280px] h-[400px] absolute left-0"
        alt="Rectangle"
        src="/img/rectangle-60.png"
      />

      <div className="flex flex-col w-[600px] items-center justify-center px-[150px] py-[25px] absolute top-[340px] left-[calc(50.00%_-_300px)] bg-[#fcfbf9] rounded-[10px]">
        <div className="relative w-fit mt-[-1.00px] ml-[-42.00px] mr-[-42.00px] [font-family:'Shippori_Mincho',Helvetica] font-medium text-[#111111] text-5xl tracking-[0] leading-[normal]">
          養成カリキュラム
        </div>

        <div className="relative w-fit [font-family:'Allura',Helvetica] font-normal text-[#d2a3cb] text-[32px] tracking-[0] leading-[normal]">
          Curriculum
        </div>
      </div>
    </div>
  );
};
