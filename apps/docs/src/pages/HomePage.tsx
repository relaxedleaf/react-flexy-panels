import { cn } from "@rlx-widgets/base";
import {
  FlexyPanelGroup,
  FlexyPanel,
  FlexyPanelHandle,
} from "react-flexy-panels";

export const HomePage = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={200} defaultSizeUnit="px">
        <div className="text-center">Panel 1</div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <FlexyPanelGroup direction="vertical" className="h-full">
          <FlexyPanel defaultSize="auto">
            <div className="text-center">Panel 2</div>
          </FlexyPanel>
          <Handle />
          <FlexyPanel defaultSize="auto">
            <div className="text-center">Panel 3</div>
          </FlexyPanel>
        </FlexyPanelGroup>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};

const Handle = () => {
  return (
    <FlexyPanelHandle
      className={cn(
        "cursor-pointer relative flex items-center justify-center after:absolute after:bg-border",
        "data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:top-[calc(50%-0.5px)] data-[direction=vertical]:after:h-px data-[direction=vertical]:after:w-full data-[direction=vertical]:[&>div]:rotate-90 data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:h-full data-[direction=horizontal]:after:inset-y-0 data-[direction=horizontal]:after:left-[calc(50%-0.5px)] data-[direction=horizontal]:after:w-px data-[direction=horizontal]:cursor-col-resize"
      )}
    />
  );
};

export default HomePage;
