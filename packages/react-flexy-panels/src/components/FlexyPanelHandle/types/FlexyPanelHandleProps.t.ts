import { ComponentProps } from "react";

export type FlexyPanelHandleProps = ComponentProps<"div"> & {
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
