import {
  FlexyPanelGroup,
  FlexyPanel,
} from "react-flexy-panels";
import { FlexyHandle } from "../components";

export const HomePage = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={300} defaultSizeUnit="px">
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
