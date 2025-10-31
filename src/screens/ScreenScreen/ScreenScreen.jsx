import React, { useEffect } from "react";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";
import { Frame4 } from "./sections/Frame4";
import { GroupWrapper } from "./sections/GroupWrapper";
import { FixedCTA } from "../../components/FixedCTA";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export const ScreenScreen = () => {
  useEffect(() => {
    // FV画像をプリロード
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/img/faq-fv.jpg';
    link.fetchpriority = 'high';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
      data-model-id="4058:2618"
    >
      <Frame2 />
      <GroupWrapper />
      <ScrollAnimation>
        <div className="flex w-full max-w-[1280px] h-auto min-h-[150px] md:min-h-[238px] items-center justify-center gap-2.5 px-4 md:px-12 lg:px-[90px] py-8 md:py-[50px] relative">
          <div className="relative w-full max-w-[1000px] font-normal text-[#111111] text-sm md:text-base lg:text-lg leading-6 md:leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center md:text-left">
            こちらでは、マシンピラティスインストラクター養成コースに関するよくある質問とその回答をご紹介します。受講にあたっての不安や疑問を解消し、安心してコースをスタートできるようサポートします。
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <Frame3 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Frame4 />
      </ScrollAnimation>
      <FixedCTA />
    </div>
  );
};
