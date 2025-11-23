import { Direction } from "../types";
import { updatePanelSizes } from "../utils";
import { useCallback, useEffect, useRef, useState } from "react";

type UsePanelDragOptions = {
  direction: Direction;
  panelRefs: Array<HTMLDivElement>;
  handleId: string;
};

/**
 * Custom hook to handle panel dragging logic
 */
export const usePanelDrag = ({
  direction,
  panelRefs,
  handleId,
}: UsePanelDragOptions) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<number>(0);

  const updateDragPosition = useCallback(
    (clientX: number, clientY: number) => {
      const dragCurrent = direction === "horizontal" ? clientX : clientY;
      const dragDelta = dragCurrent - dragStartRef.current;

      const handleIndex = panelRefs.findIndex((ref) => ref.id === handleId);
      if (handleIndex === -1) {
        return;
      }

      const panel1 = panelRefs[handleIndex - 1];
      const panel2 = panelRefs[handleIndex + 1];
      if (!panel1 || !panel2) {
        return;
      }

      updatePanelSizes({
        panel1,
        panel2,
        dragDelta,
        direction,
      });
      dragStartRef.current = dragCurrent;
    },
    [direction, handleId, panelRefs]
  );

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }
      updateDragPosition(e.clientX, e.clientY);
    },
    [isDragging, updateDragPosition]
  );

  const onTouchDrag = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) {
        return;
      }
      // Prevent default to avoid scrolling while dragging
      e.preventDefault();
      const touch = e.touches[0];
      updateDragPosition(touch.clientX, touch.clientY);
    },
    [isDragging, updateDragPosition]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      dragStartRef.current = direction === "horizontal" ? e.clientX : e.clientY;
    },
    [direction]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.touches.length > 0) {
        setIsDragging(true);
        const touch = e.touches[0];
        dragStartRef.current = direction === "horizontal" ? touch.clientX : touch.clientY;
      }
    },
    [direction]
  );

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", onTouchDrag, { passive: false });
      document.addEventListener("touchend", handleTouchEnd);
      document.addEventListener("touchcancel", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", onTouchDrag);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [isDragging, onDrag, onTouchDrag]);

  return {
    isDragging,
    handleMouseDown,
    handleTouchStart,
  };
};
