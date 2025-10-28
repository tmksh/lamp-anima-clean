import React from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";

export const FrameWrapper = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1280px] justify-between gap-8 px-4 md:px-12 lg:px-[90px] py-12 md:py-20 items-center relative flex-[0_0_auto]">
      <div className="inline-flex flex-col items-start gap-6 md:gap-[30px] relative flex-[0_0_auto] w-full md:w-auto">
        <div className="relative w-full md:w-[364px] h-auto flex flex-col items-start">
          <div className="[font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-[normal]">
            Message
          </div>

          <div className="font-medium text-[#111111] text-2xl md:text-3xl lg:text-[40px] leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] mt-2">
            １人も取り残さない
            <br />
            サポート体制
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] w-full">
          <p className="relative w-full md:w-fit mt-[-1.00px] font-normal text-black text-lg md:text-xl lg:text-2xl leading-8 md:leading-[40.8px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
            <span className="font-bold">"</span>

            <span className="font-medium">教える</span>

            <span className="font-bold">"</span>

            <span className="font-medium">を支える５つの特典</span>
          </p>

          <div className="flex flex-col w-full md:w-[500px] lg:w-[600px] items-start gap-2.5 relative flex-[0_0_auto]">
            <img
              className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
              alt="Line"
              src="/img/line-16.svg"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-full md:w-[180px] lg:w-[215px] items-center gap-3 md:gap-[15px] relative">
                <div className="relative w-8 md:w-10 h-8 md:h-10 aspect-[1] flex-shrink-0">
                  <div className="relative w-[98.21%] h-[100.00%]">
                    <img
                      className="absolute w-[20.64%] h-[20.27%] top-0 left-[30.16%]"
                      alt="Vector"
                      src="/img/vector.svg"
                    />

                    <img
                      className="absolute w-full h-full top-0 left-0"
                      alt="Vector"
                      src="/img/vector-1.svg"
                    />
                  </div>
                </div>

                <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-bold text-black text-base md:text-lg tracking-[0] leading-[normal]">
                  スタジオ開放
                </div>
              </div>

              <div className="relative w-full md:w-auto md:flex-1 font-medium text-black text-sm md:text-base lg:text-lg leading-6 md:leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                自主練習のためのスタジオ使用（7：00～23：00）
              </div>
            </div>

            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src="/img/line-16.svg"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-full md:w-[180px] lg:w-[215px] items-center gap-3 md:gap-[15px] relative">
                <img
                  className="relative w-8 md:w-10 h-8 md:h-10 aspect-[1] flex-shrink-0"
                  alt="Image"
                  src="/img/image.svg"
                />

                <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-bold text-black text-base md:text-lg tracking-[0] leading-[normal]">
                  メンター制度
                </div>
              </div>

              <div className="relative w-full md:w-auto md:flex-1 font-medium text-black text-sm md:text-base lg:text-lg leading-6 md:leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                現役のインストラクターが１対1で伴走
              </div>
            </div>

            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src="/img/line-16.svg"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-full md:w-[180px] lg:w-[215px] items-center gap-3 md:gap-[15px] relative">
                <div className="relative w-8 md:w-10 h-8 md:h-10 aspect-[1] flex-shrink-0">
                  <div className="relative w-[96.26%] h-full bg-[url(/img/vector-2.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[5.07%] h-[4.88%] top-[29.01%] left-[39.22%]"
                      alt="Vector"
                      src="/img/vector-3.svg"
                    />

                    <img
                      className="absolute w-[5.07%] h-[4.88%] top-[29.01%] left-[55.71%]"
                      alt="Vector"
                      src="/img/vector-4.svg"
                    />
                  </div>
                </div>

                <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-bold text-black text-base md:text-lg tracking-[0] leading-[normal]">
                  レビュー指導
                </div>
              </div>

              <div className="relative w-full md:w-auto md:flex-1 font-medium text-black text-sm md:text-base lg:text-lg leading-6 md:leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                実際の60分レッスンに対するフィードバック
              </div>
            </div>

            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src="/img/line-16.svg"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-full md:w-[180px] lg:w-[215px] items-center gap-3 md:gap-[15px] relative">
                <img
                  className="relative w-8 md:w-10 h-8 md:h-10 aspect-[1] flex-shrink-0"
                  alt="Image"
                  src="/img/1.svg"
                />

                <div className="relative flex-1 font-bold text-black text-base md:text-lg leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  麻布十番での
                  <br />
                  レッスン機会
                </div>
              </div>

              <div className="relative w-full md:w-auto md:flex-1 font-medium text-black text-sm md:text-base lg:text-lg leading-6 md:leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                国際的な雰囲気のスタジオで実践可
              </div>
            </div>

            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src="/img/line-16.svg"
            />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-full md:w-[240px] lg:w-[280px] items-center gap-3 md:gap-[15px] relative">
                <div className="overflow-hidden relative w-8 md:w-10 h-8 md:h-10 aspect-[1] flex-shrink-0">
                  <div className="relative w-[100.00%] h-[74.49%] top-[12.76%]">
                    <img
                      className="absolute w-[61.28%] h-[90.68%] top-0 left-[38.72%]"
                      alt="Vector"
                      src="/img/vector-5.svg"
                    />

                    <img
                      className="absolute w-[61.28%] h-[90.68%] top-[9.32%] left-0"
                      alt="Vector"
                      src="/img/vector-6.svg"
                    />
                  </div>
                </div>

                <div className="relative flex-1 font-bold text-black text-base md:text-lg leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  グループレッスン受け放題
                </div>
              </div>

              <div className="relative w-full md:w-auto md:flex-1 font-medium text-black text-sm md:text-base lg:text-lg leading-6 md:leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                自ら受けながら学べる環境
              </div>
            </div>
          </div>
        </div>

        <ConcreteComponentNode
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          text="プラン詳細はこちら"
          to="/u32946u25104u12459u12522u12461u12517u12521u12512"
        />
      </div>

      <img
        className="relative w-full md:w-[350px] lg:w-[460px] h-auto aspect-[1.01] object-cover rounded-lg"
        alt="Image"
        src="/img/image-16.png"
      />
    </div>
  );
};
