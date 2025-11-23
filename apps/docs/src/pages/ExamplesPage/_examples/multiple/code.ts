export const code = `import { cn } from "@rlx-widgets/base";
import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
} from "react-flexy-panels";

const Handle = () => {
  return (
    <FlexyPanelHandle
      className={cn(
        "cursor-pointer relative flex items-center justify-center after:absolute after:bg-border",
        "data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:top-[calc(50%-0.5px)] data-[direction=vertical]:after:h-px data-[direction=vertical]:after:w-full data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:h-full data-[direction=horizontal]:after:inset-y-0 data-[direction=horizontal]:after:left-[calc(50%-0.5px)] data-[direction=horizontal]:after:w-px data-[direction=horizontal]:cursor-col-resize"
      )}
    />
  );
};

export const Preview = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={25} defaultSizeUnit="%">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p className="font-semibold">Panel 1</p>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize={50} defaultSizeUnit="%">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p className="font-semibold">Panel 2</p>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p className="font-semibold">Panel 3</p>
        </div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};`;