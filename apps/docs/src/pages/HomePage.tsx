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
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[direction=vertical]:h-px data-[direction=vertical]:w-full data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:h-1 data-[direction=vertical]:after:w-full data-[direction=vertical]:after:translate-x-0 data-[direction=vertical]:after:-translate-y-1/2 [&[data-direction=vertical]>div]:rotate-90",
        "data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:cursor-col-resize"
      )}
    />
  );
};

export default HomePage;
