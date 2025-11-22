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

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }

      const dragCurrent = direction === "horizontal" ? e.clientX : e.clientY;
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
    [direction, handleId, isDragging, panelRefs]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      dragStartRef.current = direction === "horizontal" ? e.clientX : e.clientY;
    },
    [direction]
  );

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onDrag]);

  return {
    isDragging,
    handleMouseDown,
  };
};
