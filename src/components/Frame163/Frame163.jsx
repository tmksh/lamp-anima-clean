/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame163 = ({
  className,
  iconfinderSocial = "/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-3.svg",
}) => {
  return (
    <a
      href="https://lin.ee/Txaoupt"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-[45px] md:h-[55px] items-center justify-center gap-1.5 md:gap-2.5 px-3 md:px-[15px] py-0 relative bg-[#06c755] rounded-[5px] hover:bg-[#05b54a] transition-colors cursor-pointer ${className}`}
    >
      <img
        className="relative w-8 h-8 md:w-10 md:h-10"
        alt="Iconfinder social"
        src={iconfinderSocial}
      />

      <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-white text-sm md:text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
        LINE登録
      </div>
    </a>
  );
};

Frame163.propTypes = {
  iconfinderSocial: PropTypes.string,
};
