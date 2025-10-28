import React, { useState, useEffect } from "react";
import { ConcreteComponentNode } from "../../../../components/ConcreteComponentNode";
import { Frame22 } from "../../../../components/Frame22";

export const SectionComponentNode = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const totalCards = 5;

  // 画面幅に応じた表示枚数を計算
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // PC: 4枚表示
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // タブレット: 2枚表示
      } else {
        setCardsPerView(1); // モバイル: 1枚表示
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxSlide = Math.max(0, totalCards - cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  // カード幅の計算（ギャップ込み）
  const getCardWidth = () => {
    if (cardsPerView === 1) return '100%';
    if (cardsPerView === 2) return 'calc(50% - 8px)';
    return 'calc(25% - 12px)';
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-[50px] px-4 md:px-0 py-12 md:py-20 relative self-stretch w-full flex-[0_0_auto]">
      <div className="w-full max-w-[168px] relative h-auto flex flex-col items-center">
        <div className="[font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-[normal]">
          Column
        </div>

        <div className="font-medium text-[#111111] text-3xl md:text-4xl lg:text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] mt-2">
          コラム
        </div>
      </div>

      <div className="relative w-full max-w-[1280px] px-4 md:px-0">
        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4" 
            style={{ 
              transform: `translateX(calc(-${currentSlide * (100 / cardsPerView)}% - ${currentSlide * 16}px))`
            }}
          >
            {[...Array(totalCards)].map((_, index) => (
              <div 
                key={index} 
                className="flex-shrink-0"
                style={{ width: getCardWidth() }}
              >
                <Frame22
                  className="!h-[380px] md:!h-[443px] !flex-[0_0_auto] !left-[unset] !top-[unset]"
                  divClassName="!text-[#a2a2a2]"
                  divClassName1="!text-[#111111]"
                  divClassNameOverride="!text-[#111111]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 左矢印ボタン */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 -left-2 md:left-0 lg:-left-4 w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#d2a3cb] rounded-[30px] rotate-180 hover:bg-[#c492bb] transition-colors z-10 shadow-lg"
          aria-label="前へ"
        >
          <img
            className="-rotate-180 absolute top-4 md:top-5 left-3 md:left-3.5 w-[26px] md:w-[31px] h-4 md:h-5"
            alt="Vector"
            src="/img/vector-1-2.svg"
          />
        </button>

        {/* 右矢印ボタン */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 -right-2 md:right-0 lg:-right-4 w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#d2a3cb] rounded-[30px] hover:bg-[#c492bb] transition-colors z-10 shadow-lg"
          aria-label="次へ"
        >
          <img
            className="absolute top-4 md:top-5 left-3 md:left-3.5 w-[26px] md:w-[31px] h-4 md:h-5"
            alt="Vector"
            src="/img/vector-1-1.svg"
          />
        </button>
      </div>

      {/* ページネーションドット */}
      <div className="inline-flex items-center gap-2 md:gap-2.5 relative flex-[0_0_auto]">
        {[...Array(totalCards)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-3 md:w-[15px] h-3 md:h-[15px] rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#d2a3cb]' : 'bg-[#d9d9d9]'
            }`}
            aria-label={`スライド${index + 1}へ`}
          />
        ))}
      </div>

      <ConcreteComponentNode
        className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
        text="コラム一覧はこちら"
      />
    </div>
  );
};
