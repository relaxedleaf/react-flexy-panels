import { ComponentProps } from "react";
import { OnPreResizeFunction } from "../../../types";

export type FlexyPanelHandleProps = ComponentProps<"div"> & {
  onPreResize?: OnPreResizeFunction;
};
