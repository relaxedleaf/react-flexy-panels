"use client";

import { useId } from "react";
import { useFlexyPanelsContext, usePanelDrag } from "../../hooks";
import { FlexyPanelHandleProps } from "./types";

export const FlexyPanelHandle = ({
  onMouseDown,
  ...props
}: FlexyPanelHandleProps) => {
  const id = useId();
  const { direction, panelRefs, addPanelRef } = useFlexyPanelsContext();
  const { handleMouseDown: handleDragMouseDown } = usePanelDrag({
    direction,
    panelRefs,
    handleId: id,
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragMouseDown(e);
    onMouseDown?.(e);
  };

  return (
    <div
      id={id}
      ref={addPanelRef}
      data-direction={direction}
      onMouseDown={handleMouseDown}
      {...props}
    />
  );
};
