import { FlexyHandle } from "../components";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@rlx-hooks/use-is-mobile";
import {
  FlexyPanelGroup,
  FlexyPanel,
  type FlexyPanelRef,
} from "react-flexy-panels";

export const HomePage = () => {
  const panel1Ref = useRef<FlexyPanelRef>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      panel1Ref.current?.setSize({ size: "auto" });
    }
  }, [isMobile]);

  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel ref={panel1Ref} defaultSize={300} defaultSizeUnit="px">
        <div className="text-center">Panel 1</div>
      </FlexyPanel>
      <FlexyHandle />
      <FlexyPanel defaultSize="auto">
        <FlexyPanelGroup direction="vertical" className="h-full">
          <FlexyPanel defaultSize="auto">
            <div className="text-center">Panel 2</div>
          </FlexyPanel>
          <FlexyHandle />
          <FlexyPanel defaultSize="auto">
            <div className="text-center">Panel 3</div>
          </FlexyPanel>
        </FlexyPanelGroup>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};

export default HomePage;
