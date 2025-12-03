import { Direction } from "../types";

export const getPanelSizeByDirection = ({
  panel,
  direction,
}: {
  panel: HTMLElement;
  direction: Direction;
}) => {
  return direction === "horizontal"
    ? panel.getBoundingClientRect().width
    : panel.getBoundingClientRect().height;
};
