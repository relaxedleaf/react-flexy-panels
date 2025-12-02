import { createContext } from "react";
import { Direction } from "../types";

export const FlexyPanelsContext = createContext<{
  direction: Direction;
}>({
  direction: "horizontal",
});
