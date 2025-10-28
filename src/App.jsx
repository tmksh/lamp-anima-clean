import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Lamp } from "./screens/Lamp";
import { Screen } from "./screens/Screen";
import { Screen4 } from "./screens/Screen4";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Top } from "./screens/Top";

// ページ遷移時に必ずトップにスクロールするコンポーネント
const ScrollToTop = () => {
  const { pathname } = useLocation();

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

    // 即座に実行
    scrollToTop();
    
    // 複数のタイミングで実行して確実にする
    requestAnimationFrame(scrollToTop);
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
    
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 200);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Top />} />
        <Route path="/topu12504u12442u12540u12471u12441" element={<Top />} />
        <Route path="/u32946u25104u12459u12522u12461u12517u12521u12512" element={<Screen />} />
        <Route path="/u12424u12367u12354u12427u36074u21839" element={<ScreenScreen />} />
        <Route path="/u21463u35611u12398u27969u12428" element={<ScreenWrapper />} />
        <Route path="/u35611u24107u32057u20171" element={<Screen4 />} />
        <Route path="/lampu12398u32057u20171" element={<Lamp />} />
      </Routes>
    </BrowserRouter>
  );
};
