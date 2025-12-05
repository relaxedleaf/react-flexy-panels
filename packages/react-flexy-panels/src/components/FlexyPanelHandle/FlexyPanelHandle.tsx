"use client";

import { useCallback, useId, forwardRef, useRef, useEffect } from "react";
import { useFlexyPanelsContext, usePanelDrag } from "../../hooks";
import { FlexyPanelHandleProps } from "./types";

export const FlexyPanelHandle = forwardRef<
  HTMLDivElement,
  FlexyPanelHandleProps
>(({ onMouseDown, onTouchStart, onPreResize, ...props }, ref) => {
  const id = useId();
  const { direction } = useFlexyPanelsContext();
  const {
    handleMouseDown: handleDragMouseDown,
    handleTouchStart: handleDragTouchStart,
  } = usePanelDrag({
    direction,
    handleId: id,
    onPreResize,
  });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      handleDragMouseDown(e);
      onMouseDown?.(e);
    },
    [handleDragMouseDown, onMouseDown]
  );

  const handleTouchStartEvent = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      handleDragTouchStart(e);
      onTouchStart?.(e);
    },
    [handleDragTouchStart, onTouchStart]
  );

  // Store the forwarded ref in a ref to avoid dependency issues
  const forwardedRef = useRef(ref);
  useEffect(() => {
    forwardedRef.current = ref;
  }, [ref]);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    // Forward the ref if provided
    const currentRef = forwardedRef.current;
    if (typeof currentRef === "function") {
      currentRef(node);
    } else if (currentRef) {
      currentRef.current = node;
    }
  }, []);

  return (
    <div
      id={id}
      ref={setRef}
      data-direction={direction}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStartEvent}
      {...props}
    />
  );
});

FlexyPanelHandle.displayName = "FlexyPanelHandle";
