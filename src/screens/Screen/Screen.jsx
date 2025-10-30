import React, { useEffect } from "react";
import { Frame1 } from "./sections/Frame1";
import { Frame49Wrapper } from "./sections/Frame49Wrapper";
import { FrameInstanceWrapper } from "./sections/FrameInstanceWrapper";
import { Group } from "./sections/Group";
import { FixedCTA } from "../../components/FixedCTA";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export const Screen = () => {
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
      data-model-id="4058:2322"
    >
      <Frame49Wrapper />
      <Group />
      <ScrollAnimation>
        <Frame1 />
      </ScrollAnimation>
      <ScrollAnimation>
        <FrameInstanceWrapper />
      </ScrollAnimation>
      <FixedCTA />
    </div>
  );
};
