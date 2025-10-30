import React, { useEffect } from "react";
import { Frame12 } from "./sections/Frame12";
import { Frame13 } from "./sections/Frame13";
import { Frame14 } from "./sections/Frame14";
import { Group2 } from "./sections/Group2";
import { FixedCTA } from "../../components/FixedCTA";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export const Lamp = () => {
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
      data-model-id="4058:2405"
    >
      <Frame12 />
      <Group2 />
      <ScrollAnimation>
        <Frame13 />
      </ScrollAnimation>
      <ScrollAnimation>
        <Frame14 />
      </ScrollAnimation>
      <FixedCTA />
    </div>
  );
};
