/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Frame163 } from "../Frame163";

export const Frame49 = ({
  className,
  frame163IconfinderSocial = "/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-2.svg",
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`flex w-full max-w-[1280px] mx-auto h-auto min-h-[77px] items-center justify-between px-4 md:px-[30px] py-3 md:py-1.5 fixed top-0 left-0 right-0 z-50 bg-[#ffffff66] backdrop-blur-sm ${className}`}
      >
        <Link to="/topu12504u12442u12540u12471u12441">
          <img
            className="relative w-[70px] md:w-[100px] h-auto z-[1] cursor-pointer"
            alt="Group"
            src="/img/group.png"
          />
        </Link>

        <div className="inline-flex items-center gap-2 md:gap-4 relative flex-[0_0_auto] z-0">
          {/* ハンバーガーメニューボタン（モバイルのみ） */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            aria-label="メニュー"
          >
            <span className={`block w-6 h-0.5 bg-[#d2a3cb] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#d2a3cb] mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#d2a3cb] mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* PCメニュー */}
          <div className="hidden lg:inline-flex h-[25px] items-start gap-3 xl:gap-5 relative flex-[0_0_auto]">
          <Link
            className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base text-center tracking-[0] leading-[normal] block"
            to={to}
          >
            lampの魅力
          </Link>

          <Link
            className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base tracking-[0] leading-[normal] block"
            to={to1}
          >
            講師紹介
          </Link>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base tracking-[0] leading-[normal]">
            コラム
          </div>

          <Link
            className="text-center relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base tracking-[0] leading-[normal] block"
            to={to3}
          >
            よくある質問
          </Link>

          <Link
            className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base tracking-[0] leading-[normal] block"
            to={to4}
          >
            受講の流れ
          </Link>

          <Link
            className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base tracking-[0] leading-[normal] block"
            to={to5}
          >
            養成カリキュラム
          </Link>
        </div>

        {/* LINEボタン（PC版のみ） */}
        <Frame163
          className="!flex-[0_0_auto] !left-[unset] !top-[unset] hidden lg:inline-flex"
          iconfinderSocial={frame163IconfinderSocial}
        />
      </div>
    </div>

    {/* モバイルメニューオーバーレイ */}
    {isMenuOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[55] lg:hidden" onClick={closeMenu}>
        <div 
          className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-[60] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 pt-20">
            <Link
              className="py-4 border-b border-gray-200 [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-lg"
              to={to}
              onClick={closeMenu}
            >
              lampの魅力
            </Link>

            <Link
              className="py-4 border-b border-gray-200 [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-lg"
              to={to1}
              onClick={closeMenu}
            >
              講師紹介
            </Link>

            <div className="py-4 border-b border-gray-200 [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-lg">
              コラム
            </div>

            <Link
              className="py-4 border-b border-gray-200 [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-lg"
              to={to3}
              onClick={closeMenu}
            >
              よくある質問
            </Link>

            <Link
              className="py-4 border-b border-gray-200 [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-lg"
              to={to4}
              onClick={closeMenu}
            >
              受講の流れ
            </Link>

            <Link
              className="py-4 border-b border-gray-200 [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-lg"
              to={to5}
              onClick={closeMenu}
            >
              養成カリキュラム
            </Link>

            {/* モバイルメニュー内のLINEボタン */}
            <div className="mt-6">
              <Frame163
                className="!relative !left-[unset] !top-[unset] w-full justify-center"
                iconfinderSocial={frame163IconfinderSocial}
              />
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

Frame49.propTypes = {
  frame163IconfinderSocial: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
