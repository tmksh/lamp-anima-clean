import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { Frame182Wrapper } from "./sections/Frame182Wrapper";
import { FrameWrapper } from "./sections/FrameWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";

export const Top = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
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
