/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Frame16 } from "../Frame16";

export const Frame182 = ({
  className,
  frame16IconfinderSocial = "/img/iconfinder-social-media-applications-5line-4102577-113787-1-2.svg",
  path = "/img/path-1462.svg",
  img = "/img/path-1518.svg",
  path1 = "/img/path-1732.svg",
  path2 = "/img/path-1074.svg",
  path3 = "/img/path-964.svg",
  path4 = "/img/path-1620.svg",
  path5 = "/img/path-1582.svg",
  logo = "/img/logo-1.svg",
  to,
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  return (
    <div
      className={`flex flex-col items-center w-full relative ${className}`}
    >
      <div className="flex flex-col w-full max-w-[1280px] items-center justify-center gap-8 md:gap-[50px] px-4 md:px-12 lg:px-[90px] py-12 md:py-20 relative flex-[0_0_auto] bg-[url(/img/frame-14.png)] bg-cover bg-[50%_50%]">
        <div className="relative w-full max-w-[628px] h-auto flex flex-col items-center md:items-start">
          <div className="[font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-3xl md:text-5xl lg:text-[64px] tracking-[0] leading-[normal] text-center md:text-left">
            Request &amp; Contact
          </div>

          <div className="font-medium text-[#111111] text-2xl md:text-4xl lg:text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center md:text-left mt-2">
            受講申し込み・お問い合わせ
          </div>
        </div>

        <p className="relative w-full font-normal text-transparent text-sm md:text-base lg:text-lg leading-6 md:leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] text-center md:text-left px-2 md:px-0">
          <span className="text-[#111111]">
            受講のお申し込みはもちろん、受講を迷っている方や疑問がある方もこちらの
          </span>

          <span className="font-semibold text-[#06c755] underline">
            公式LINE
          </span>

          <span className="text-[#111111]">
            からお気軽にご連絡ください。皆様の不安や疑問に丁寧にお答えいたします。あなたの新しい一歩を全力でサポートいたしますので、ぜひご相談ください。
          </span>
        </p>

        <Frame16
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          iconfinderSocial={frame16IconfinderSocial}
        />
      </div>

      <div className="flex flex-col items-center gap-2.5 pt-8 md:pt-[60px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <a
          href="https://lamp-pilates.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full h-auto cursor-pointer group"
        >
          <img
            className="relative w-full h-auto object-cover transition-transform group-hover:scale-[1.02]"
            alt="ピラティススタジオ lamp - 公式サイトはこちらから"
            src="/img/image-15.png"
          />
        </a>
      </div>

      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-full max-w-[1280px] items-center justify-center gap-8 md:gap-[50px] px-4 md:px-0 py-10 md:py-[60px] relative flex-[0_0_auto]">
            <img
              className="absolute top-[calc(50.00%_-_110px)] left-0 w-full h-[220px] hidden md:block"
              alt="Rectangle"
              src="/img/rectangle-55.png"
            />

            <div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-[1100px] items-center justify-center gap-4 lg:gap-6 relative flex-[0_0_auto] z-10">
              <Link
                className="flex flex-col w-full h-[100px] md:h-[110px] lg:h-[126px] items-center justify-center gap-2.5 px-4 py-8 relative bg-[#d2a3cb] rounded-[10px] overflow-hidden border-2 md:border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to}
              >
                <img
                  className="absolute top-2 md:top-3.5 left-0 w-[120px] md:w-[140px] lg:w-[160px] h-auto opacity-50"
                  alt="Path"
                  src={path}
                />

                <div className="[text-shadow:0px_10px_10px_#0000000d] text-white text-base md:text-lg lg:text-xl relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-center tracking-[0] leading-[normal] z-10">
                  lampの魅力
                </div>
              </Link>

              <Link
                className="flex flex-col w-full h-[100px] md:h-[110px] lg:h-[126px] items-center justify-center gap-2.5 px-4 py-8 relative bg-[#d2a3cb] rounded-[10px] overflow-hidden border-2 md:border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to1}
              >
                <img
                  className="absolute top-6 md:top-[35px] left-[3px] w-[120px] md:w-[140px] lg:w-[160px] h-auto opacity-50"
                  alt="Path"
                  src={img}
                />

                <div className="relative w-fit font-semibold text-white text-base md:text-lg lg:text-xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] z-10">
                  講師紹介
                </div>
              </Link>

              <div className="flex flex-col w-full h-[100px] md:h-[110px] lg:h-[126px] items-center justify-center gap-2.5 px-4 py-8 relative bg-[#d2a3cb] rounded-[10px] overflow-hidden border-2 md:border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]">
                <img
                  className="absolute top-2 md:top-2.5 right-0 md:left-auto w-[60px] md:w-[70px] lg:w-[80px] h-auto opacity-50"
                  alt="Path"
                  src={path2}
                />

                <div className="relative w-fit font-semibold text-white text-base md:text-lg lg:text-xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] z-10">
                  コラム
                </div>
              </div>

              <Link
                className="flex flex-col w-full h-[100px] md:h-[110px] lg:h-[126px] items-center justify-center gap-2.5 px-4 py-8 relative bg-[#d2a3cb] rounded-[10px] overflow-hidden border-2 md:border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to3}
              >
                <img
                  className="absolute top-[3px] left-0 w-[130px] md:w-[150px] lg:w-[170px] h-auto opacity-50"
                  alt="Path"
                  src={path3}
                />

                <div className="relative w-fit font-semibold text-white text-base md:text-lg lg:text-xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] z-10">
                  受講の流れ
                </div>
              </Link>

              <Link
                className="flex flex-col w-full h-[100px] md:h-[110px] lg:h-[126px] items-center justify-center gap-2.5 px-4 py-8 relative bg-[#d2a3cb] rounded-[10px] overflow-hidden border-2 md:border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to4}
              >
                <div className="relative w-fit font-semibold text-white text-base md:text-lg lg:text-xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] z-10">
                  よくある質問
                </div>

                <img
                  className="absolute top-4 md:top-[29px] left-0 w-[110px] md:w-[130px] lg:w-[150px] h-auto opacity-50"
                  alt="Path"
                  src={path4}
                />
              </Link>

              <Link
                className="flex flex-col w-full h-[100px] md:h-[110px] lg:h-[126px] items-center justify-center gap-2.5 px-4 py-8 relative bg-[#d2a3cb] rounded-[10px] overflow-hidden border-2 md:border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to5}
              >
                <img
                  className="absolute top-3 md:top-5 left-[29px] w-[110px] md:w-[120px] lg:w-[140px] h-auto opacity-50"
                  alt="Path"
                  src={path5}
                />

                <div className="relative w-fit font-semibold text-white text-base md:text-lg lg:text-xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] z-10">
                  養成カリキュラム
                </div>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[1280px] h-[300px] md:h-[400px] lg:h-[450px]">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7686843856856!2d139.73443831525906!3d35.65382798020032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4b0c7e0001%3A0x0!2zMzXCsDM5JzEzLjgiTiAxMznCsDQ0JzEwLjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp&q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E9%BA%BB%E5%B8%83%E5%8D%81%E7%95%AA2-1-10"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ピラティススタジオ lamp 地図"
            />
          </div>

          <div className="flex flex-col md:flex-row w-full max-w-[1280px] items-start md:items-center gap-8 md:gap-12 lg:gap-[268px] px-4 md:px-12 lg:px-[90px] py-8 md:py-10 relative flex-[0_0_auto]">
            <div className="flex flex-col w-full md:w-[264px] items-start gap-5 relative">
              <Link to="/topu12504u12442u12540u12471u12441">
                <img
                  className="relative w-[120px] md:w-[150px] h-auto cursor-pointer"
                  alt="Logo"
                  src={logo}
                />
              </Link>

              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#111111] text-base md:text-lg tracking-[0] leading-[normal]">
                  ピラティススタジオ lamp
                </div>

                <div className="relative self-stretch [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-sm md:text-[15px] tracking-[0] leading-[normal]">
                  〒106-0045
                  <br />
                  東京都港区麻布十番 2-1-10 静屋ビル 3F
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-auto items-start md:items-center gap-8 md:gap-12 lg:gap-[100px] relative">
              <div className="flex flex-col md:inline-flex items-start gap-3 md:gap-[15px] relative flex-[0_0_auto]">
                <Link 
                  to={to}
                  className="mt-[-1.00px] text-[#111111] text-sm md:text-[15px] relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-center tracking-[0] leading-[normal] hover:text-[#d2a3cb] transition-colors"
                >
                  lampの魅力
                </Link>

                <Link 
                  to={to1}
                  className="relative self-stretch font-semibold text-[#111111] text-sm md:text-[15px] leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] hover:text-[#d2a3cb] transition-colors"
                >
                  講師紹介
                </Link>

                <div className="relative w-fit font-semibold text-[#111111] text-sm md:text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] opacity-50">
                  コラム
                </div>

                <Link 
                  to={to4}
                  className="relative w-fit font-semibold text-[#111111] text-sm md:text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] hover:text-[#d2a3cb] transition-colors"
                >
                  よくある質問
                </Link>

                <Link 
                  to={to3}
                  className="relative self-stretch font-semibold text-[#111111] text-sm md:text-[15px] leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] hover:text-[#d2a3cb] transition-colors"
                >
                  受講の流れ
                </Link>

                <Link 
                  to={to5}
                  className="relative w-fit font-semibold text-[#111111] text-sm md:text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0] hover:text-[#d2a3cb] transition-colors"
                >
                  養成カリキュラム
                </Link>
              </div>

            </div>
          </div>

          <img
            className="relative w-full max-w-[1280px] h-px object-cover"
            alt="Line"
            src="/img/line-1.svg"
          />

          <div className="flex w-full max-w-[1280px] h-auto min-h-[69px] items-center justify-center gap-2.5 px-4 md:px-[90px] py-5 relative">
            <p className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#a2a2a2] text-xs md:text-[15px] tracking-[0] leading-[normal] text-center">
              © lamp pilates studio All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame182.propTypes = {
  frame16IconfinderSocial: PropTypes.string,
  path: PropTypes.string,
  img: PropTypes.string,
  path1: PropTypes.string,
  path2: PropTypes.string,
  path3: PropTypes.string,
  path4: PropTypes.string,
  path5: PropTypes.string,
  logo: PropTypes.string,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
  to3: PropTypes.string,
  to4: PropTypes.string,
  to5: PropTypes.string,
};
