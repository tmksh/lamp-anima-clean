import React from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";

export const Div = () => {
  return (
    <div className="flex w-[1280px] h-[600px] items-center justify-center gap-[63px] relative bg-[url(/img/frame-172.png)] bg-cover bg-[50%_50%]">
      <div className="absolute top-7 left-36 w-[395px] h-[395px] rounded-[10px]" />

      <img
        className="relative w-[400px] h-[600px] object-cover"
        alt="Img"
        src="/img/img-1515-2.png"
      />

      <div className="w-[538px] items-start gap-10 px-5 py-[30px] rounded-[10px] flex flex-col relative">
        <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-8.00px]">
          <div className="w-[218px] relative h-24">
            <div className="absolute top-0 left-px [font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-[64px] tracking-[0] leading-[normal]">
              Greetings
            </div>

            <div className="absolute top-[26px] left-0 font-medium text-[#111111] text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              ご挨拶
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-medium text-black text-[22px] leading-[37.4px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              資格はゴールじゃない。 <br />
              本当のスタートは、「教える自信」を持てたとき。
            </div>

            <p className="font-normal text-[#111111] text-xl leading-[34.0px] relative self-stretch [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
              資格を取っても、すぐに教えるのは不安。そんな声を何度も耳にしてきました。
              だからlampでは、ただ学ぶだけでなく、
              “教えられる力”を育てる講座をつくりました。
              卒業後には、60分レッスンの設計と実践をしっかり経験 できます。
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
