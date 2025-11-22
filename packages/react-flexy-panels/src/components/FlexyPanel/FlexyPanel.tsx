import { ComponentProps, CSSProperties } from "react";
import { useFlexyPanelsContext } from "../../hooks";

export const FlexyPanel = ({
  children,
  defaultSize,
  defaultSizeUnit = "%",
  style,
  ...props
}: ComponentProps<"div"> & {
  /**
   * The default size of the panel in pixel
   * "auto" means the panel will take up the remaining space
   */
  defaultSize: number | "auto";
  /**
   * @default "%"
   */
  defaultSizeUnit?: "px" | "%";
}) => {
  const { addPanelRef } = useFlexyPanelsContext();
  const size: CSSProperties =
    defaultSize === "auto"
      ? { flex: "auto" }
      : { flex: `0 0 ${defaultSize}${defaultSizeUnit}` };

  return (
    <div
      ref={addPanelRef}
      style={{ ...size, ...style }}
      data-unit={defaultSize === "auto" ? "auto" : defaultSizeUnit}
      {...props}
    >
      {children}
    </div>
  );
};
