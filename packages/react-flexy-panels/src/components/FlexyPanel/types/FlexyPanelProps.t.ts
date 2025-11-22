import { ComponentProps } from "react";

export type FlexyPanelProps = ComponentProps<"div"> &
  (
    | {
        /**
         * The default size of the panel in pixel
         * "auto" means the panel will take up the remaining space
         */
        defaultSize: "auto";
        defaultSizeUnit?: never;
      }
    | {
        /**
         * The default size of the panel in pixel
         */
        defaultSize: number;
        /**
         * @default "%"
         */
        defaultSizeUnit?: "px" | "%";
      }
  );
