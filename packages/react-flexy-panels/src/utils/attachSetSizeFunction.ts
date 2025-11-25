import { FlexyPanelRef } from "../components";

export const attachSetSizeFunction = (ref: HTMLDivElement) => {
  (ref as FlexyPanelRef).setSize = ({ size, unit }) => {
    if (size === "auto") {
      ref.style.flex = "auto";
    } else {
      ref.style.flex = `0 0 ${size}${unit}`;
    }
  };
};
