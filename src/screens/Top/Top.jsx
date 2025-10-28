import React, { useEffect } from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { Frame182Wrapper } from "./sections/Frame182Wrapper";
import { FrameWrapper } from "./sections/FrameWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";

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
      className="flex flex-col items-center w-full relative bg-[#fcfbf9] overflow-x-hidden"
      data-model-id="4058:2143"
    >
      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <Div />
      <SectionComponentNode />
      <Frame182Wrapper />
    </div>
  );
};
