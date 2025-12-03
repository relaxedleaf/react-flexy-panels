import { Direction } from "../types";
import { getPanelSizeByDirection } from "./getPanelSizeByDirection";

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

  const panel1Size = getPanelSizeByDirection({ panel: panel1, direction });
  const panel2Size = getPanelSizeByDirection({ panel: panel2, direction });

  // Get the parent container to check bounds
  const container = panel1.parentElement;
  const containerSize = container
    ? getPanelSizeByDirection({ panel: container, direction })
    : null;

  // Calculate new sizes for the two panels being resized
  let panel1NewSize = panel1Size + dragDelta;
  let panel2NewSize = panel2Size - dragDelta;

  // Constrain sizes to container bounds
  const minPanelSize = 0;
  if (containerSize !== null && container) {
    // Get all panel elements (excluding handles) to calculate total size
    const allPanels = Array.from(container.children).filter(
      (child): child is HTMLDivElement => {
        // Panels have data-unit attribute, handles have data-direction
        return (
          child instanceof HTMLDivElement &&
          child.hasAttribute("data-unit") &&
          child !== panel1 &&
          child !== panel2
        );
      }
    );

    // Calculate current sizes of all other panels
    const otherPanelsTotalSize = allPanels.reduce((sum, panel) => {
      const size =
        direction === "horizontal"
          ? panel.getBoundingClientRect().width
          : panel.getBoundingClientRect().height;
      return sum + size;
    }, 0);

    // Calculate total size with new panel1 and panel2 sizes
    const totalSize = panel1NewSize + panel2NewSize + otherPanelsTotalSize;

    // If total exceeds container, scale panel1 and panel2 proportionally
    if (totalSize > containerSize) {
      const availableSize = containerSize - otherPanelsTotalSize;
      const panel1And2Total = panel1NewSize + panel2NewSize;
      if (panel1And2Total > 0 && availableSize > 0) {
        const scale = availableSize / panel1And2Total;
        panel1NewSize = panel1NewSize * scale;
        panel2NewSize = panel2NewSize * scale;
      }
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
    panel1.style.flex = `0 1 ${panel1NewSize}px`;
  } else if (
    panel1Unit === "auto" &&
    (panel2Unit === "px" || panel2Unit === "%")
  ) {
    panel2.style.flex = `0 1 ${panel2NewSize}px`;
  } else if (panel1Unit === "px" && panel2Unit === "px") {
    panel1.style.flex = `0 1 ${panel1NewSize}px`;
    panel2.style.flex = `0 1 ${panel2NewSize}px`;
  } else if (panel1Unit === "px" && panel2Unit === "%") {
    panel1.style.flex = `0 1 ${panel1NewSize}px`;
    panel2.style.flex = `0 1 ${panel2NewSize}px`;
  } else if (panel1Unit === "px" && panel2Unit === "auto") {
    panel1.style.flex = `0 1 ${panel1NewSize}px`;
  } else if (panel1Unit === "%" && panel2Unit === "auto") {
    panel1.style.flex = `0 0 ${panel1NewSize}px`;
  } else if (panel1Unit === "%" && panel2Unit === "px") {
    panel1.style.flex = `0 1 ${panel1NewSize}px`;
    panel2.style.flex = `0 1 ${panel2NewSize}px`;
  } else if (panel1Unit === "%" && panel2Unit === "%") {
    panel1.style.flex = `0 1 ${panel1NewSize}px`;
    panel2.style.flex = `0 1 ${panel2NewSize}px`;
  }
}
