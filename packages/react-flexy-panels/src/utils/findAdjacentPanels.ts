/**
 * Finds adjacent panels to a handle element using DOM traversal
 */
export function findAdjacentPanels(handleElement: HTMLElement): {
  panel1: HTMLDivElement | null;
  panel2: HTMLDivElement | null;
} {
  // Helper to check if an element is a panel (has data-unit attribute)
  const isPanel = (el: Element | null): el is HTMLDivElement => {
    return el instanceof HTMLDivElement && el.hasAttribute("data-unit");
  };

  // Find previous sibling panel
  let panel1: HTMLDivElement | null = null;
  let current: Element | null = handleElement.previousElementSibling;
  while (current && !panel1) {
    if (isPanel(current)) {
      panel1 = current;
    } else {
      current = current.previousElementSibling;
    }
  }

  // Find next sibling panel
  let panel2: HTMLDivElement | null = null;
  current = handleElement.nextElementSibling;
  while (current && !panel2) {
    if (isPanel(current)) {
      panel2 = current;
    } else {
      current = current.nextElementSibling;
    }
  }

  return { panel1, panel2 };
}
