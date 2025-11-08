import React, { useEffect } from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { Frame182Wrapper } from "./sections/Frame182Wrapper";
import { FrameWrapper } from "./sections/FrameWrapper";
import { Frame49 } from "../../components/Frame49";
import { FixedCTA } from "../../components/FixedCTA";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export const Top = () => {
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
      data-model-id="4058:2143"
    >
      <Frame49
        frame163IconfinderSocial="/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-2.svg"
        to="/lamp"
        to1="/instructor"
        to2="/curriculum"
        to3="/faq"
        to4="/flow"
        to5="/curriculum"
      />
      <Frame />
      <ScrollAnimation>
        <FrameWrapper />
      </ScrollAnimation>
      <ScrollAnimation>
        <DivWrapper />
      </ScrollAnimation>
      <ScrollAnimation>
        <Div />
      </ScrollAnimation>
      <div className="h-12 md:h-20"></div>
      <Frame182Wrapper />
      <FixedCTA />
    </div>
  );
};
