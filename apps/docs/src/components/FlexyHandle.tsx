import { cn } from "@rlx-widgets/base";
import { GripVerticalIcon } from "lucide-react";
import { FlexyPanelHandle, OnPreResizeFunction } from "react-flexy-panels";

export const FlexyHandle = ({ withHandle, onPreResize }: { withHandle?: boolean, onPreResize?: OnPreResizeFunction }) => {
  return (
    <FlexyPanelHandle
      className={cn(
        "cursor-pointer relative flex items-center justify-center after:absolute after:bg-border",
        "data-[direction=vertical]:h-px data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:top-[calc(50%-0.5px)] data-[direction=vertical]:after:h-px data-[direction=vertical]:after:w-full data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:w-px data-[direction=horizontal]:after:inset-y-0 data-[direction=horizontal]:after:left-[calc(50%-0.5px)] data-[direction=horizontal]:after:w-px data-[direction=horizontal]:cursor-col-resize"
      )}
      onPreResize={onPreResize}
    >
      {withHandle && (
        <div
          className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border"
        >
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </FlexyPanelHandle>
  );
};
