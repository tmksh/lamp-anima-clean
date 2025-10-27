import React from "react";
import { Frame5 } from "./sections/Frame5";
import { Frame6 } from "./sections/Frame6";
import { Frame7 } from "./sections/Frame7";
import { Group1 } from "./sections/Group1";

export const ScreenWrapper = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4058:2575"
    >
      <Frame5 />
      <Group1 />
      <div className="flex h-[238px] items-center justify-center gap-2.5 px-[90px] py-[50px] relative self-stretch w-full">
        <div className="relative w-[1000px] font-normal text-[#111111] text-lg leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
          マシンピラティスインストラクター養成コースは、初めての方でも安心してわかりやすいステップ式のカリキュラムで進みます。下記のステップで、資格取得に向けた学びをしっかり進めていきます。
        </div>
      </div>

      <Frame6 />
      <Frame7 />
    </div>
  );
};
