"use client";

import { useMemo } from "react";
import { FlexyPanelsContext } from "../../contexts";
import { FlexyPanelGroupProps } from "./types";

export const FlexyPanelGroup = ({
  children,
  direction,
  style,
  ...props
}: FlexyPanelGroupProps) => {
  const value = useMemo(() => ({ direction }), [direction]);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: direction === "vertical" ? "column" : "row",
        ...style,
      }}
      {...props}
    >
      <FlexyPanelsContext.Provider value={value}>
        {children}
      </FlexyPanelsContext.Provider>
    </div>
  );
};
