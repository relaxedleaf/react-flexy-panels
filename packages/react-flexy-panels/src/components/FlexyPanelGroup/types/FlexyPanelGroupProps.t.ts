import { ComponentProps } from "react";
import { Direction } from "../../../types";

export type FlexyPanelGroupProps = ComponentProps<"div"> & {
  direction: Direction;
};
