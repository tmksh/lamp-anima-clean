import React from "react";
import { Frame12 } from "./sections/Frame12";
import { Frame13 } from "./sections/Frame13";
import { Frame14 } from "./sections/Frame14";
import { Group2 } from "./sections/Group2";

export const Lamp = () => {
  return (
    <div
      className="flex flex-col items-start relative bg-[#fcfbf9]"
      data-model-id="4058:2405"
    >
      <Frame12 />
      <Group2 />
      <Frame13 />
      <Frame14 />
    </div>
  );
};
