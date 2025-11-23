export const code = `import { cn } from "@rlx-widgets/base";
import { GripVerticalIcon } from "lucide-react";
import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
} from "react-flexy-panels";

const FlexyHandle = ({ withHandle }: { withHandle?: boolean }) => {
  return (
    <FlexyPanelHandle
      className={cn(
        "cursor-pointer relative flex items-center justify-center after:absolute after:bg-border",
        "data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:top-[calc(50%-0.5px)] data-[direction=vertical]:after:h-px data-[direction=vertical]:after:w-full data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:after:inset-y-0 data-[direction=horizontal]:after:left-[calc(50%-0.5px)] data-[direction=horizontal]:after:w-px data-[direction=horizontal]:cursor-col-resize"
      )}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </FlexyPanelHandle>
  );
};

export const Preview = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="rounded-lg border">
      <FlexyPanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </FlexyPanel>
      <FlexyHandle withHandle />
      <FlexyPanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};`;
