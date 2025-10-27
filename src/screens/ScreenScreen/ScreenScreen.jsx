import React from "react";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";
import { Frame4 } from "./sections/Frame4";
import { GroupWrapper } from "./sections/GroupWrapper";

export const ScreenScreen = () => {
  return (
    <div
      className="inline-flex flex-col items-start relative bg-[#fcfbf9]"
      data-model-id="4058:2618"
    >
      <Frame2 />
      <GroupWrapper />
      <div className="flex w-[1280px] h-[238px] items-center justify-center gap-2.5 px-[90px] py-[50px] relative">
        <div className="relative w-[1000px] font-normal text-[#111111] text-lg leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
          こちらでは、マシンピラティスインストラクター養成コースに関するよくある質問とその回答をご紹介します。受講にあたっての不安や疑問を解消し、安心してコースをスタートできるようサポートします。
        </div>
      </div>

      <Frame3 />
      <Frame4 />
    </div>
  );
};
