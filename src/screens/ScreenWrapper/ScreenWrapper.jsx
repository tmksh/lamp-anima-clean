import React, { useEffect } from "react";
import { Frame5 } from "./sections/Frame5";
import { Frame6 } from "./sections/Frame6";
import { Frame7 } from "./sections/Frame7";
import { Group1 } from "./sections/Group1";
import { FixedCTA } from "../../components/FixedCTA";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export const ScreenWrapper = () => {
  useEffect(() => {
    // ブラウザのスクロール復元機能を無効化
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 複数の方法で確実にトップへスクロール
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    requestAnimationFrame(scrollToTop);
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 200);
  }, []);

  return (
    <div
      className="flex flex-col items-center w-full relative bg-[#fcfbf9] overflow-x-hidden pb-[72px] lg:pb-0"
      data-model-id="4058:2575"
    >
      <Frame5 />
      <Group1 />
      <ScrollAnimation>
        <div className="flex h-auto min-h-[150px] md:min-h-[238px] items-center justify-center gap-2.5 px-4 md:px-12 lg:px-[90px] py-8 md:py-[50px] relative self-stretch w-full">
          <div className="relative w-full max-w-[1000px] font-normal text-[#111111] text-sm md:text-base lg:text-lg leading-6 md:leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center md:text-left">
            マシンピラティスインストラクター養成コースは、初めての方でも安心してわかりやすいステップ式のカリキュラムで進みます。下記のステップで、資格取得に向けた学びをしっかり進めていきます。
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <Frame6 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Frame7 />
      </ScrollAnimation>
      <FixedCTA />
    </div>
  );
};
