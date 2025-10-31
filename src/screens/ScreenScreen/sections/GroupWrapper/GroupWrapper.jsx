import React from "react";

export const GroupWrapper = () => {
  return (
    <div className="relative w-full max-w-[1280px] h-auto min-h-[477px] md:min-h-[577px]">
      <img
        className="top-[77px] h-[300px] md:h-[400px] absolute left-0 w-full object-cover"
        alt="よくある質問"
        src="/img/faq-fv.jpg"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
      />

      <div className="flex flex-col w-[90%] max-w-[600px] items-center justify-center px-6 md:px-[150px] py-[25px] absolute top-[317px] md:top-[417px] left-[50%] -translate-x-1/2 bg-[#fcfbf9] rounded-[10px]">
        <div className="relative w-fit mt-[-1.00px] font-medium text-[#111111] text-3xl md:text-4xl lg:text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center whitespace-nowrap">
          よくある質問
        </div>

        <div className="relative w-fit [font-family:'Allura',Helvetica] font-normal text-[#d2a3cb] text-2xl md:text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
          Q and A
        </div>
      </div>
    </div>
  );
};
