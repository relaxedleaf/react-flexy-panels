import { useEffect, useRef, useState } from "react";
import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
} from "react-flexy-panels";

const Handle = () => {
  const handleRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<"vertical" | "horizontal">("horizontal");

  useEffect(() => {
    const node = handleRef.current;
    if (!node) return;

    const updateDirection = () => {
      const dir = node.getAttribute("data-direction") as "vertical" | "horizontal";
      if (dir) {
        setDirection(dir);
      }
    };

    updateDirection();

    const observer = new MutationObserver(updateDirection);
    observer.observe(node, {
      attributes: true,
      attributeFilter: ["data-direction"],
    });

    return () => observer.disconnect();
  }, []);

  const isVertical = direction === "vertical";

  return (
    <FlexyPanelHandle
      ref={handleRef}
      style={{
        cursor: isVertical ? "row-resize" : "col-resize",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isVertical ? "100%" : undefined,
        height: isVertical ? undefined : "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "var(--border, hsl(var(--border)))",
          ...(isVertical
            ? {
                left: 0,
                top: "calc(50% - 0.5px)",
                height: "1px",
                width: "100%",
              }
            : {
                top: 0,
                bottom: 0,
                left: "calc(50% - 0.5px)",
                width: "1px",
              }),
        }}
      />
    </FlexyPanelHandle>
  );
};

export const Preview = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={30} defaultSizeUnit="%">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p>Left Panel</p>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p>Right Panel</p>
        </div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};
