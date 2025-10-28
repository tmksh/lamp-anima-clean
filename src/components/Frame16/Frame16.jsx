/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame16 = ({
  className,
  iconfinderSocial = "/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-1.svg",
}) => {
  return (
    <a
      href="https://lin.ee/Txaoupt"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 md:gap-[15px] px-6 md:px-10 py-2 md:py-2.5 relative bg-[#06c755] rounded-[5px] shadow-[0px_5px_5px_#0000001a] hover:bg-[#05b54a] transition-colors cursor-pointer ${className}`}
    >
      <img
        className="relative w-8 h-8 md:w-10 md:h-10"
        alt="Iconfinder social"
        src={iconfinderSocial}
      />

      <div className="relative w-fit [font-family:'Shippori_Mincho',Helvetica] font-semibold text-white text-lg md:text-2xl text-center tracking-[0] leading-[normal]">
        LINE登録はこちら
      </div>
    </a>
  );
};

Frame16.propTypes = {
  iconfinderSocial: PropTypes.string,
};
