export const code = `import { cn } from "@rlx-widgets/base";
import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
} from "react-flexy-panels";

const FlexyHandle = () => {
  return (
    <FlexyPanelHandle
      className={cn(
        "cursor-pointer relative flex items-center justify-center after:absolute after:bg-border",
        "data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:top-[calc(50%-0.5px)] data-[direction=vertical]:after:h-px data-[direction=vertical]:after:w-full data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:after:inset-y-0 data-[direction=horizontal]:after:left-[calc(50%-0.5px)] data-[direction=horizontal]:after:w-px data-[direction=horizontal]:cursor-col-resize"
      )}
    />
  );
};

export const Preview = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="rounded-lg border">
      <FlexyPanel defaultSize={25}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </FlexyPanel>
      <FlexyHandle />
      <FlexyPanel defaultSize={25}>
        <FlexyPanelGroup direction="vertical">
          <FlexyPanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </FlexyPanel>
          <FlexyHandle />
          <FlexyPanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </FlexyPanel>
        </FlexyPanelGroup>
      </FlexyPanel>
      <FlexyHandle />
      <FlexyPanel defaultSize={50}>
        <FlexyPanelGroup direction="vertical">
          <FlexyPanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </FlexyPanel>
          <FlexyHandle />
          <FlexyPanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </FlexyPanel>
        </FlexyPanelGroup>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};`;
