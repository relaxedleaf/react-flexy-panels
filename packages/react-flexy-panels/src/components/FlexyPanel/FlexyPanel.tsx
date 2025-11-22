"use client";

import { CSSProperties } from "react";
import { FlexyPanelProps } from "./types";
import { useFlexyPanelsContext } from "../../hooks";

export const FlexyPanel = ({
  children,
  defaultSize,
  defaultSizeUnit = "%",
  style,
  ...props
}: FlexyPanelProps) => {
  const { addPanelRef } = useFlexyPanelsContext();
  const size: CSSProperties =
    defaultSize === "auto"
      ? { flex: "auto" }
      : { flex: `0 0 ${defaultSize}${defaultSizeUnit}` };

  return (
    <div
      ref={addPanelRef}
      style={{ ...size, ...style }}
      data-unit={defaultSize === "auto" ? "auto" : defaultSizeUnit}
      {...props}
    >
      {children}
    </div>
  );
};
