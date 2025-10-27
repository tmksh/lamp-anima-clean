import React from "react";
import { Frame1 } from "./sections/Frame1";
import { Frame49Wrapper } from "./sections/Frame49Wrapper";
import { FrameInstanceWrapper } from "./sections/FrameInstanceWrapper";
import { Group } from "./sections/Group";

export const Screen = () => {
  return (
    <div
      className="flex flex-col items-end relative bg-[#fcfbf9]"
      data-model-id="4058:2322"
    >
      <Frame49Wrapper />
      <Group />
      <Frame1 />
      <FrameInstanceWrapper />
    </div>
  );
};
