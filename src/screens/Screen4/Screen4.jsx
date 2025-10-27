import React from "react";
import { Frame8 } from "./sections/Frame8";
import { Frame9 } from "./sections/Frame9";
import { Frame10 } from "./sections/Frame10";
import { Frame11 } from "./sections/Frame11";

export const Screen4 = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4058:2503"
    >
      <Frame8 />
      <Frame9 />
      <div className="flex h-[238px] items-center justify-center gap-2.5 px-[90px] py-[50px] relative self-stretch w-full bg-[#fcfbf9]">
        <div className="relative w-[1000px] [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-lg tracking-[0] leading-[30.6px]">
          当スタジオの講師は、豊富な現場経験と高い指導力を備えた専門家です。確かな技術で、初心者から上級者まで、それぞれの目標に合わせた指導を行います。資格取得後のキャリア支援にも力を入れ、あなたの夢を実現するお手伝いをします。
        </div>
      </div>

      <Frame10 />
      <Frame11 />
    </div>
  );
};
