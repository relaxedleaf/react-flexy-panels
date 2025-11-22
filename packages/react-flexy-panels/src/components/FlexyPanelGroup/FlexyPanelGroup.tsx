"use client";

import { useCallback, useMemo, useState } from "react";
import { FlexyPanelsContext } from "../../contexts";
import { FlexyPanelGroupProps } from "./types";

export const FlexyPanelGroup = ({
  children,
  direction,
  style,
  ...props
}: FlexyPanelGroupProps) => {
  const [panelRefs, setPanelRefs] = useState<Array<HTMLDivElement>>([]);

  const addPanelRef = useCallback((ref: HTMLDivElement) => {
    setPanelRefs((prev) => [...prev, ref]);
  }, []);

  const value = useMemo(
    () => ({ direction, panelRefs, addPanelRef }),
    [direction, panelRefs, addPanelRef]
  );

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
