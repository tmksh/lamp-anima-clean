import React from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";
import { Frame15 } from "../../../../components/Frame15";

export const DivWrapper = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-[50px] px-4 md:px-12 lg:px-[90px] py-12 md:py-20 relative self-stretch w-full flex-[0_0_auto]">
      <div className="w-full max-w-[266px] relative h-auto flex flex-col items-center md:items-start">
        <div className="[font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-[normal]">
          fascination
        </div>

        <div className="font-medium text-[#111111] text-3xl md:text-4xl lg:text-5xl [font-family:'Shippori_Mincho',Helvetica] tracking-[0] leading-[normal] mt-2">
          lampの特徴
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1100px] items-center justify-center gap-8 md:gap-12 lg:gap-[69px] relative flex-[0_0_auto]">
        <Frame15
          className="!pt-5 !pb-[30px] !px-5 !left-[unset] !top-[unset]"
          divClassName="!text-[#111111]"
          divClassNameOverride="!text-[#111111] !text-[17px] !leading-[28.9px]"
          rectangle="/img/rectangle-5-1.png"
          text="メンター制度"
          text1="1人1人に現役のインストラクターがつくので困ったときに直ぐ質問し解決することが可能です"
        />
        <Frame15
          className="!pt-5 !pb-[30px] !px-5 !left-[unset] !top-[unset]"
          divClassName="!text-[#111111]"
          divClassNameOverride="!text-[#111111] !text-[17px] !leading-[28.9px]"
          rectangle="/img/rectangle-5-2.png"
          text="就職支援"
          text1=" “教える場所”があるから、一歩踏み出せる。 卒業後はlampで週2コマから実践デビューが可能です。"
        />
        <Frame15
          className="!pt-5 !pb-[30px] !px-5 !left-[unset] !top-[unset]"
          divClassName="!text-[#111111]"
          divClassNameOverride="!text-[#111111] !text-[17px] !leading-[28.9px]"
          rectangle="/img/rectangle-5-3.png"
          text="指導力が身につく"
          text1="即戦力として60分のリフォーマークラスが担当できるようにプログラムが構成されています"
        />
      </div>

      <ConcreteComponentNode
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        text="詳しくはこちら"
        to="/lampu12398u32057u20171"
      />
    </div>
  );
};
