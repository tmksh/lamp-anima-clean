import React from "react";
import { Frame49 } from "../../../../components/Frame49";

export const Frame = () => {
  return (
    <div className="flex flex-col w-full max-w-[1280px] h-auto min-h-[500px] md:min-h-[720px] items-start gap-2.5 relative">
      <Frame49
        className="!z-[2] !w-full"
        to="/lampu12398u32057u20171"
        to1="/u35611u24107u32057u20171"
        to2="/u32946u25104u12459u12522u12461u12517u12521u12512"
        to3="/u12424u12367u12354u12427u36074u21839"
        to4="/u21463u35611u12398u27969u12428"
        to5="/u32946u25104u12459u12522u12461u12517u12521u12512"
      />
      <div className="absolute top-0 left-0 md:left-[86px] w-full md:w-[calc(100%-86px)] max-w-[1194px] h-[500px] md:h-[720px] z-[1]">
        <div className="flex flex-col w-full h-full items-start justify-end gap-5 md:gap-[30px] pt-20 md:pt-[164px] pb-12 md:pb-[70px] px-4 md:px-12 lg:px-[75px] relative bg-[url(/img/frame-80.png)] bg-cover bg-[50%_50%]">
          <div className="inline-flex flex-col items-start gap-5 md:gap-[30px] relative flex-[0_0_auto] max-w-full">
            {/* モバイル版のテキスト */}
            <div className="md:hidden inline-flex items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto] bg-[#d2a3cb] rounded-[5px] w-full">
              <div className="relative w-fit mt-[-1.00px] font-bold text-white text-2xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center">
                人生が変わる"6日間"
              </div>
            </div>

            <div className="md:hidden inline-flex flex-col items-start gap-2.5 px-4 py-3 relative flex-[0_0_auto] bg-[#ffffffa6] rounded-[5px] w-full">
              <div className="relative w-full font-semibold text-[#111111] text-[15px] leading-7 [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center">
                実践的なスキルと確かな指導力を手に入れ<br />
                誰かの成長を支えるインストラクターに
              </div>
            </div>

            {/* PC版のテキスト */}
            <div className="hidden md:inline-flex items-center justify-center gap-2.5 px-10 py-2.5 relative flex-[0_0_auto] bg-[#d2a3cb] rounded-[5px]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-white text-4xl lg:text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center">
                {" "}
                "6日間"で即戦力のインストラクターに
              </div>
            </div>

            <div className="hidden md:inline-flex flex-col items-start gap-2.5 px-5 py-[15px] relative flex-[0_0_auto] bg-[#ffffffa6] rounded-[5px] max-w-full">
              <div className="inline-flex flex-col items-center justify-center pl-2.5 pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-semibold text-[#111111] text-xl lg:text-2xl leading-[40.8px] whitespace-nowrap [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  資格だけでは足りない"教える力"を支える
                </div>

                <img
                  className="relative self-stretch w-full h-1 mb-[-2.00px]"
                  alt="Line"
                  src="/img/line-4.svg"
                />
              </div>

              <div className="inline-flex flex-col items-start pl-2.5 pr-0 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-semibold text-[#111111] text-xl lg:text-2xl leading-[40.8px] whitespace-nowrap [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  レッスン設計まで学べる6日間。
                </div>

                <img
                  className="relative self-stretch w-full h-1 mb-[-2.00px]"
                  alt="Line"
                  src="/img/line-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-[317px] left-[35px] w-6 h-[86px] z-0">
        <div className="absolute top-2.5 -left-2.5 rotate-[90.00deg] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#dec17a] text-[15px] text-center tracking-[0] leading-[normal]">
          scroll
        </div>

        <img
          className="absolute top-12 left-2 w-px h-[38px] object-cover"
          alt="Line"
          src="/img/line-2.svg"
        />
      </div>
    </div>
  );
};
