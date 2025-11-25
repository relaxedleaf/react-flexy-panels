import { SetSizeFunction } from "./SetSizeFunction.t";

export type FlexyPanelRef = HTMLDivElement & {
  setSize: SetSizeFunction;
};
