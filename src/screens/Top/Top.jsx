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
      className="flex flex-col items-center w-full relative bg-[#fcfbf9] overflow-x-hidden pb-[72px] lg:pb-0 page-fade-in"
      data-model-id="4058:2143"
    >
      <Frame49
        frame163IconfinderSocial="/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-2.svg"
        to="/lampu12398u32057u20171"
        to1="/u35611u24107u32057u20171"
        to2="/u32946u25104u12459u12522u12461u12517u12521u12512"
        to3="/u12424u12367u12354u12427u36074u21839"
        to4="/u21463u35611u12398u27969u12428"
        to5="/u32946u25104u12459u12522u12461u12517u12521u12512"
      />
      <Frame />
      <ScrollAnimation animation="fade-in">
        <FrameWrapper />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-in">
        <DivWrapper />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-in">
        <Div />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-in">
        <Frame182Wrapper />
      </ScrollAnimation>
      <FixedCTA />
    </div>
  );
};
