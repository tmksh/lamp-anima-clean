/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
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
  return (
    <div
      className={`flex w-[1280px] h-[77px] items-center justify-between px-[30px] py-1.5 relative bg-[#ffffff66] ${className}`}
    >
      <img
        className="relative w-[100px] h-[53.95px] z-[1]"
        alt="Group"
        src="/img/group.png"
      />

      <div className="inline-flex items-center gap-4 relative flex-[0_0_auto] z-0">
        <div className="inline-flex h-[25px] items-start gap-5 relative flex-[0_0_auto]">
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

          <Link
            className="relative w-fit mt-[-1.00px] [font-family:'Shippori_Mincho',Helvetica] font-semibold text-[#d2a3cb] text-base tracking-[0] leading-[normal] block"
            to={to2}
          >
            プランのご紹介
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

        <Frame163
          className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
          iconfinderSocial={frame163IconfinderSocial}
        />
      </div>
    </div>
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
