import { createContext } from "react";
import { Direction } from "../types";

export const FlexyPanelsContext = createContext<{
  direction: Direction;
  panelRefs: Array<HTMLDivElement>;
  addPanelRef: (ref: HTMLDivElement) => void;
}>({
  direction: "horizontal",
  panelRefs: [],
  addPanelRef: () => {
    return;
  },
});
