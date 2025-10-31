import React, { useEffect } from "react";
import { Frame8 } from "./sections/Frame8";
import { Frame9 } from "./sections/Frame9";
import { Frame10 } from "./sections/Frame10";
import { Frame11 } from "./sections/Frame11";
import { FixedCTA } from "../../components/FixedCTA";

export const Screen4 = () => {
  useEffect(() => {
    // FV画像をプリロード
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/img/koushi-fv.jpg';
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
      data-model-id="4058:2503"
    >
      <Frame8 />
      <Frame9 />
      <div className="flex h-auto min-h-[150px] md:min-h-[238px] items-center justify-center gap-2.5 px-4 md:px-12 lg:px-[90px] py-8 md:py-[50px] relative self-stretch w-full bg-[#fcfbf9]">
        <div className="relative w-full max-w-[1000px] [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-sm md:text-base lg:text-lg tracking-[0] leading-6 md:leading-[30.6px] text-center md:text-left">
          当スタジオの講師は、豊富な現場経験と高い指導力を備えた専門家です。確かな技術で、初心者から上級者まで、それぞれの目標に合わせた指導を行います。資格取得後のキャリア支援にも力を入れ、あなたの夢を実現するお手伝いをします。
        </div>
      </div>

      <Frame10 />
      <Frame11 />
      <FixedCTA />
    </div>
  );
};
