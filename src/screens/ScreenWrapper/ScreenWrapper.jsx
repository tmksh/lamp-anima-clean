import React from "react";
import { Frame5 } from "./sections/Frame5";
import { Frame6 } from "./sections/Frame6";
import { Frame7 } from "./sections/Frame7";
import { Group1 } from "./sections/Group1";

export const ScreenWrapper = () => {
  return (
    <div
      className="flex flex-col items-center w-full relative bg-[#fcfbf9] overflow-x-hidden"
      data-model-id="4058:2575"
    >
      <Frame5 />
      <Group1 />
      <div className="flex h-auto min-h-[150px] md:min-h-[238px] items-center justify-center gap-2.5 px-4 md:px-12 lg:px-[90px] py-8 md:py-[50px] relative self-stretch w-full">
        <div className="relative w-full max-w-[1000px] font-normal text-[#111111] text-sm md:text-base lg:text-lg leading-6 md:leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center md:text-left">
          マシンピラティスインストラクター養成コースは、初めての方でも安心してわかりやすいステップ式のカリキュラムで進みます。下記のステップで、資格取得に向けた学びをしっかり進めていきます。
        </div>
      </div>

      <Frame6 />
      <Frame7 />
    </div>
  );
};
