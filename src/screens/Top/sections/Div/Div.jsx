import React from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";

export const Div = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1280px] h-auto min-h-[600px] md:h-[600px] items-center justify-center gap-8 md:gap-[63px] px-4 md:px-0 py-12 md:py-0 relative bg-[url(/img/frame-172.png)] bg-cover bg-[50%_50%]">
      <div className="hidden md:block absolute top-7 left-36 w-[395px] h-[395px] rounded-[10px]" />

      <img
        className="relative w-full md:w-[350px] lg:w-[400px] h-auto md:h-[500px] lg:h-[600px] object-cover rounded-lg md:rounded-none"
        alt="Img"
        src="/img/img-1515-2.png"
      />

      <div className="w-full md:w-[450px] lg:w-[538px] items-start gap-6 md:gap-10 px-4 md:px-5 py-6 md:py-[30px] rounded-[10px] flex flex-col relative">
        <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] w-full">
          <div className="w-full relative h-auto flex flex-col items-start">
            <div className="[font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-[normal]">
              Greetings
            </div>

            <div className="font-medium text-[#111111] text-3xl md:text-4xl lg:text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] mt-2">
              ご挨拶
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-full mt-[-1.00px] font-medium text-black text-lg md:text-xl lg:text-[22px] leading-7 md:leading-[37.4px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              資格はゴールじゃない。<br />
              本当のスタートは、「教える自信」<span className="whitespace-nowrap">を持てたとき。</span>
            </div>

            <p className="font-normal text-[#111111] text-base md:text-lg lg:text-xl leading-6 md:leading-[34.0px] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              資格を取っても、すぐに教えるのは不安。そんな声を何度も耳にしてきました。<br />
              だからlampでは、ただ学ぶだけでなく、"教えられる力"を育てる講座をつくりました。<br />
              卒業後には、60分レッスンの設計と実践をしっかり経験できます。<br />
              不安を自信に変えて、一歩を踏み出しましょう
            </p>
          </div>
        </div>

        <ConcreteComponentNode
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="インストラクター紹介はこちら"
          to="/u35611u24107u32057u20171"
        />
      </div>
    </div>
  );
};
