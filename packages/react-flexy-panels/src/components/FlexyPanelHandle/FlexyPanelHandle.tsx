"use client";

import { useFlexyPanelsContext } from "../../hooks";
import {
  ComponentProps,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export const FlexyPanelHandle = ({
  onMouseDown,
  ...props
}: ComponentProps<"div">) => {
  const id = useId();
  const { direction, panelRefs, addPanelRef } = useFlexyPanelsContext();
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef<number>(0);
  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }
      const dragCurrent = direction === "horizontal" ? e.clientX : e.clientY;
      const dragDelta = dragCurrent - dragStartRef.current;

      const handleIndex = panelRefs.findIndex((ref) => ref.id === id);
      if (handleIndex === -1) {
        return;
      }
      const panel1 = panelRefs[handleIndex - 1];
      const panel2 = panelRefs[handleIndex + 1];
      if (!panel1 || !panel2) {
        return;
      }
      const panel1Unit = panel1.dataset.unit;
      const panel2Unit = panel2.dataset.unit;
      const panel1Size =
        direction === "horizontal"
          ? panel1.getBoundingClientRect().width
          : panel1.getBoundingClientRect().height;
      console.log({ currentPanel1Size: panel1Size });
      const panel2Size =
        direction === "horizontal"
          ? panel2.getBoundingClientRect().width
          : panel2.getBoundingClientRect().height;
      if (panel1Unit === "auto" && panel2Unit === "auto") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `${panel1NewSize}px 0`;
      } else if (panel1Unit === "auto" && panel2Unit === "px") {
        const panel2NewSize = panel2Size - dragDelta;
        panel2.style.flexBasis = `${panel2NewSize}px`;
      } else if (panel1Unit === "auto" && panel2Unit === "%") {
        const panel2NewSize = panel2Size - dragDelta;
        panel2.style.flexBasis = `${panel2NewSize}px`;
      } else if (panel1Unit === "px" && panel2Unit === "px") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `${panel1NewSize}px 0`;
        panel2.style.flex = `auto`;
      } else if (panel1Unit === "px" && panel2Unit === "%") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `${panel1NewSize}px 0`;
        panel2.style.flex = `auto`;
      } else if (panel1Unit === "px" && panel2Unit === "auto") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `${panel1NewSize}px 0`;
      } else if (panel1Unit === "%" && panel2Unit === "auto") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `0 0 ${panel1NewSize}px`;
      } else if (panel1Unit === "%" && panel2Unit === "px") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `${panel1NewSize}px 0`;
        panel2.style.flex = `auto`;
      } else if (panel1Unit === "%" && panel2Unit === "%") {
        const panel1NewSize = panel1Size + dragDelta;
        panel1.style.flex = `${panel1NewSize}px 0`;
        panel2.style.flex = `auto`;
      }
      dragStartRef.current = dragCurrent;
    },
    [direction, id, isDragging, panelRefs]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      dragStartRef.current = direction === "horizontal" ? e.clientX : e.clientY;
      onMouseDown?.(e);
    },
    [direction, onMouseDown]
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
