"use client";

import { useCallback, useId, forwardRef, useRef, useEffect } from "react";
import { useFlexyPanelsContext, usePanelDrag } from "../../hooks";
import { FlexyPanelHandleProps } from "./types";

export const FlexyPanelHandle = forwardRef<HTMLDivElement, FlexyPanelHandleProps>(
  ({ onMouseDown, ...props }, ref) => {
    const id = useId();
    const { direction, panelRefs, addPanelRef } = useFlexyPanelsContext();
    const { handleMouseDown: handleDragMouseDown } = usePanelDrag({
      direction,
      panelRefs,
      handleId: id,
    });

    const handleMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        handleDragMouseDown(e);
        onMouseDown?.(e);
      },
      [handleDragMouseDown, onMouseDown]
    );

    // Store the forwarded ref in a ref to avoid dependency issues
    const forwardedRef = useRef(ref);
    useEffect(() => {
      forwardedRef.current = ref;
    }, [ref]);

    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        // Call addPanelRef to register the element
        if (node) {
          addPanelRef(node);
        }
        // Forward the ref if provided
        const currentRef = forwardedRef.current;
        if (typeof currentRef === "function") {
          currentRef(node);
        } else if (currentRef) {
          currentRef.current = node;
        }
      },
      [addPanelRef]
    );

    return (
      <div
        id={id}
        ref={setRef}
        data-direction={direction}
        onMouseDown={handleMouseDown}
        {...props}
      />
    );
  }
);

FlexyPanelHandle.displayName = "FlexyPanelHandle";
