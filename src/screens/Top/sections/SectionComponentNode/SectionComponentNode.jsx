import React from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";
import { Frame22 } from "../../../../components/Frame22";

export const SectionComponentNode = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] px-0 py-20 relative self-stretch w-full flex-[0_0_auto]">
      <div className="w-[168px] relative h-24">
        <div className="absolute top-0 left-px [font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-[64px] tracking-[0] leading-[normal]">
          Column
        </div>

        <div className="absolute top-[26px] left-0 font-medium text-[#111111] text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
          コラム
        </div>
      </div>

      <div className="flex w-[1280px] items-center justify-center gap-[35px] relative flex-[0_0_auto]">
        <Frame22
          className="!h-[443px] !ml-[-155.00px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
          divClassName="!text-[#a2a2a2]"
          divClassName1="!text-[#111111]"
          divClassNameOverride="!text-[#111111]"
        />
        <Frame22
          className="!h-[443px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
          divClassName="!text-[#a2a2a2]"
          divClassName1="!text-[#111111]"
          divClassNameOverride="!text-[#111111]"
        />
        <Frame22
          className="!h-[443px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
          divClassName="!text-[#a2a2a2]"
          divClassName1="!text-[#111111]"
          divClassNameOverride="!text-[#111111]"
        />
        <Frame22
          className="!h-[443px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
          divClassName="!text-[#a2a2a2]"
          divClassName1="!text-[#111111]"
          divClassNameOverride="!text-[#111111]"
        />
        <Frame22
          className="!h-[443px] !mr-[-155.00px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
          divClassName="!text-[#a2a2a2]"
          divClassName1="!text-[#111111]"
          divClassNameOverride="!text-[#111111]"
        />
        <div className="absolute top-48 left-[1165px] w-[60px] h-[60px] bg-[#d2a3cb] rounded-[30px]">
          <img
            className="absolute top-5 left-3.5 w-[31px] h-5"
            alt="Vector"
            src="/img/vector-1-1.svg"
          />
        </div>

        <div className="absolute top-48 left-[55px] w-[60px] h-[60px] bg-[#d2a3cb] rounded-[30px] rotate-180">
          <img
            className="-rotate-180 absolute top-5 left-3.5 w-[31px] h-5"
            alt="Vector"
            src="/img/vector-1-2.svg"
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
        <div className="bg-[#d2a3cb] relative w-[15px] h-[15px] rounded-[7.5px]" />

        <div className="bg-[#d9d9d9] relative w-[15px] h-[15px] rounded-[7.5px]" />

        <div className="bg-[#d9d9d9] relative w-[15px] h-[15px] rounded-[7.5px]" />

        <div className="bg-[#d9d9d9] relative w-[15px] h-[15px] rounded-[7.5px]" />
      </div>

      <ConcreteComponentNode
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        text="コラム一覧はこちら"
      />
    </div>
  );
};
