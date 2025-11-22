"use client";

import { Direction } from "../../types";
import { FlexyPanelsContext } from "../../contexts";
import { ComponentProps, useCallback, useMemo, useState } from "react";

export const FlexyPanelGroup = ({
  children,
  direction,
  ...props
}: ComponentProps<"div"> & {
  direction: Direction;
}) => {
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
      }}
      {...props}
    >
      <FlexyPanelsContext.Provider value={value}>
        {children}
      </FlexyPanelsContext.Provider>
    </div>
  );
};
