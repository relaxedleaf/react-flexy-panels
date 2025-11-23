import { Direction } from "../types";

type PanelUnit = "px" | "%" | "auto";

/**
 * Updates the size of two adjacent panels based on drag delta
 */
export function updatePanelSizes(props: {
  panel1: HTMLDivElement;
  panel2: HTMLDivElement;
  dragDelta: number;
  direction: Direction;
}): void {
  const { panel1, panel2, dragDelta, direction } = props;

  const panel1Unit = (panel1.dataset.unit || "auto") as PanelUnit;
  const panel2Unit = (panel2.dataset.unit || "auto") as PanelUnit;

  const panel1Size =
    direction === "horizontal"
      ? panel1.getBoundingClientRect().width
      : panel1.getBoundingClientRect().height;
  const panel2Size =
    direction === "horizontal"
      ? panel2.getBoundingClientRect().width
      : panel2.getBoundingClientRect().height;

  // Get the parent container to check bounds
  const container = panel1.parentElement;
  const containerSize = container
    ? direction === "horizontal"
      ? container.getBoundingClientRect().width
      : container.getBoundingClientRect().height
    : null;

  // Calculate new sizes
  let panel1NewSize = panel1Size + dragDelta;
  let panel2NewSize = panel2Size - dragDelta;

  // Constrain sizes to container bounds
  const minPanelSize = 0;
  if (containerSize !== null) {
    // Ensure total doesn't exceed container
    const totalSize = panel1NewSize + panel2NewSize;
    if (totalSize > containerSize) {
      // Scale both panels proportionally to fit within container
      const scale = containerSize / totalSize;
      panel1NewSize = panel1NewSize * scale;
      panel2NewSize = panel2NewSize * scale;
    }
    
    // Ensure panels don't go below minimum (but allow total to be less than container)
    panel1NewSize = Math.max(minPanelSize, panel1NewSize);
    panel2NewSize = Math.max(minPanelSize, panel2NewSize);
  } else {
    // Fallback: just ensure minimum sizes
    panel1NewSize = Math.max(minPanelSize, panel1NewSize);
    panel2NewSize = Math.max(minPanelSize, panel2NewSize);
  }

  // Handle different unit combinations
  if (panel1Unit === "auto" && panel2Unit === "auto") {
    panel1.style.flex = `${panel1NewSize}px 0`;
  } else if (
    panel1Unit === "auto" &&
    (panel2Unit === "px" || panel2Unit === "%")
  ) {
    panel2.style.flexBasis = `${panel2NewSize}px`;
  } else if (panel1Unit === "px" && panel2Unit === "px") {
    panel1.style.flex = `${panel1NewSize}px 0`;
    panel2.style.flex = "auto";
  } else if (panel1Unit === "px" && panel2Unit === "%") {
    panel1.style.flex = `${panel1NewSize}px 0`;
    panel2.style.flex = "auto";
  } else if (panel1Unit === "px" && panel2Unit === "auto") {
    panel1.style.flex = `${panel1NewSize}px 0`;
  } else if (panel1Unit === "%" && panel2Unit === "auto") {
    panel1.style.flex = `0 0 ${panel1NewSize}px`;
  } else if (panel1Unit === "%" && panel2Unit === "px") {
    panel1.style.flex = `${panel1NewSize}px 0`;
    panel2.style.flex = "auto";
  } else if (panel1Unit === "%" && panel2Unit === "%") {
    panel1.style.flex = `${panel1NewSize}px 0`;
    panel2.style.flex = "auto";
  }
}
