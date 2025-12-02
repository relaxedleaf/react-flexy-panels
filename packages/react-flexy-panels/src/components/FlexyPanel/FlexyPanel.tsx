"use client";

import {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { type FlexyPanelProps, type FlexyPanelRef } from "./types";
import { useFlexyPanelsContext } from "../../hooks";
import { attachSetSizeFunction } from "../../utils/attachSetSizeFunction";

export const FlexyPanel = forwardRef<FlexyPanelRef, FlexyPanelProps>(
  ({ children, defaultSize, defaultSizeUnit = "%", style, ...props }, ref) => {
    const size: CSSProperties =
      defaultSize === "auto"
        ? { flex: "auto" }
        : { flex: `0 0 ${defaultSize}${defaultSizeUnit}` };

    // Store the forwarded ref in a ref to avoid dependency issues
    const forwardedRef = useRef(ref);
    useEffect(() => {
      forwardedRef.current = ref;
    }, [ref]);

    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        // Attach setSize function to panel element
        if (node) {
          attachSetSizeFunction(node);
        }
        // Forward the ref if provided
        const currentRef = forwardedRef.current;
        if (typeof currentRef === "function") {
          currentRef(node as FlexyPanelRef);
        } else if (currentRef) {
          currentRef.current = node as FlexyPanelRef;
        }
      },
      []
    );

    return (
      <div
        ref={setRef}
        style={{ ...size, ...style }}
        data-unit={defaultSize === "auto" ? "auto" : defaultSizeUnit}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FlexyPanel.displayName = "FlexyPanel";
