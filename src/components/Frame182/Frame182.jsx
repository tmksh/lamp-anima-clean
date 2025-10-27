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
      className={`inline-flex flex-col items-start relative top-[1963px] left-[-18230px] ${className}`}
    >
      <div className="flex flex-col w-[1280px] items-center justify-center gap-[50px] px-[90px] py-20 relative flex-[0_0_auto] bg-[url(/img/frame-14.png)] bg-cover bg-[50%_50%]">
        <div className="relative w-[628px] h-24">
          <div className="absolute top-0 left-px [font-family:'Allura',Helvetica] font-normal text-[#dec17a] text-[64px] tracking-[0] leading-[normal]">
            Request &amp; Contact
          </div>

          <div className="absolute top-[26px] left-0 font-medium text-[#111111] text-5xl leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
            受講申し込み・お問い合わせ
          </div>
        </div>

        <p className="relative self-stretch font-normal text-transparent text-lg leading-[30.6px] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
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

      <div className="flex flex-col items-start gap-2.5 pt-[60px] pb-0 px-[340px] relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-[600px] h-[283px] aspect-[2.12] object-cover"
          alt="Image"
          src="/img/image-15.png"
        />
      </div>

      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[1280px] items-center justify-center gap-[50px] px-0 py-[60px] relative flex-[0_0_auto]">
            <img
              className="absolute top-[calc(50.00%_-_110px)] left-0 w-[1280px] h-[220px]"
              alt="Rectangle"
              src="/img/rectangle-55.png"
            />

            <div className="flex w-[1100px] items-center justify-between relative flex-[0_0_auto]">
              <Link
                className="ml-[-3.00px] flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[38px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to}
              >
                <img
                  className="absolute top-3.5 left-0 w-[175px] h-[106px]"
                  alt="Path"
                  src={path}
                />

                <div className="mt-[-41.50px] mb-[-35.50px] [text-shadow:0px_10px_10px_#0000000d] text-white text-2xl relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-center tracking-[0] leading-[normal]">
                  lampの魅力
                </div>
              </Link>

              <Link
                className="flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[54px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to1}
              >
                <img
                  className="absolute top-[35px] left-[3px] w-[184px] h-[85px]"
                  alt="Path"
                  src={img}
                />

                <div className="relative w-fit mt-[-41.50px] mb-[-35.50px] font-semibold text-white text-2xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  講師紹介
                </div>
              </Link>

              <Link
                className="flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[38px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to2}
              >
                <img
                  className="absolute top-0 left-[15px] w-[210px] h-[120px]"
                  alt="Path"
                  src={path1}
                />

                <div className="relative w-fit mt-[-41.50px] mb-[-35.50px] [text-shadow:0px_10px_10px_#0000000d] font-semibold text-white text-2xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  プランの紹介
                </div>
              </Link>

              <div className="mr-[-3.00px] flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[54px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]">
                <img
                  className="absolute top-2.5 left-[125px] w-[89px] h-[110px]"
                  alt="Path"
                  src={path2}
                />

                <div className="relative w-fit mt-[-41.50px] mb-[-35.50px] font-semibold text-white text-2xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  コラム
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-[33.33px] relative flex-[0_0_auto]">
              <Link
                className="flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[42px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] ml-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to3}
              >
                <img
                  className="absolute top-[3px] left-0 w-[201px] h-[117px]"
                  alt="Path"
                  src={path3}
                />

                <div className="relative w-fit mt-[-41.50px] mb-[-35.50px] font-semibold text-white text-2xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  受講の流れ
                </div>
              </Link>

              <Link
                className="flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[30px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to4}
              >
                <div className="relative w-fit mt-[-41.50px] mb-[-35.50px] font-semibold text-white text-2xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  よくある質問
                </div>

                <img
                  className="absolute top-[29px] left-0 w-[171px] h-[91px]"
                  alt="Path"
                  src={path4}
                />
              </Link>

              <Link
                className="flex flex-col w-64 h-[126px] items-center justify-center gap-2.5 px-[30px] py-[84px] relative mt-[-3.00px] mb-[-3.00px] mr-[-3.00px] bg-[#d2a3cb] rounded-[10px] overflow-hidden border-[3px] border-solid border-white shadow-[0px_5px_5px_#0000001a]"
                to={to5}
              >
                <img
                  className="absolute top-5 left-[29px] w-[161px] h-[100px]"
                  alt="Path"
                  src={path5}
                />

                <div className="relative w-fit mt-[-41.50px] mb-[-35.50px] ml-[-1.00px] font-semibold text-white text-2xl text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  養成カリキュラム
                </div>
              </Link>
            </div>
          </div>

          <img
            className="relative w-[1280px] h-[375.42px]"
            alt="Element"
            src="/img/2024-09-08-1-46-17-1.png"
          />

          <div className="flex w-[1280px] items-center gap-[268px] px-[90px] py-10 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[264px] items-start gap-5 relative">
              <img
                className="relative w-[150px] h-[80.93px]"
                alt="Logo"
                src={logo}
              />

              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#111111] text-lg tracking-[0] leading-[normal]">
                  ピラティススタジオ lamp
                </div>

                <div className="relative self-stretch [font-family:'Shippori_Mincho',Helvetica] font-normal text-[#111111] text-[15px] tracking-[0] leading-[normal]">
                  〒106-0045
                  <br />
                  東京都港区麻布十番 2-1-10 静屋ビル 3F
                </div>
              </div>
            </div>

            <div className="flex w-[568px] items-center gap-[100px] relative">
              <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                <div className="mt-[-1.00px] text-[#111111] text-[15px] relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-center tracking-[0] leading-[normal]">
                  lampの魅力
                </div>

                <div className="relative self-stretch font-semibold text-[#111111] text-[15px] leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  講師紹介
                </div>

                <div className="relative w-fit font-semibold text-[#111111] text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  プランのご紹介
                </div>

                <div className="relative w-fit font-semibold text-[#111111] text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  コラム
                </div>

                <div className="relative w-fit font-semibold text-[#111111] text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  よくある質問
                </div>

                <div className="relative self-stretch font-semibold text-[#111111] text-[15px] leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  受講の流れ
                </div>

                <div className="relative w-fit font-semibold text-[#111111] text-[15px] text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  受講申し込み
                </div>
              </div>

              <div className="inline-flex flex-col items-start justify-end gap-[15px] self-stretch relative flex-[0_0_auto]">
                <div className="relative w-fit font-semibold text-[#111111] text-xs text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  プライバシーポリシー
                </div>

                <div className="relative w-fit font-semibold text-[#111111] text-xs text-center leading-[normal] [font-family:'Shippori_Mincho',Helvetica] tracking-[0]">
                  キャンセルポリシー
                </div>
              </div>
            </div>
          </div>

          <img
            className="relative w-[1280px] h-px object-cover"
            alt="Line"
            src="/img/line-1.svg"
          />

          <div className="flex w-[1280px] h-[69px] items-center justify-center gap-2.5 px-[90px] py-5 relative">
            <p className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#a2a2a2] text-[15px] tracking-[0] leading-[normal]">
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
