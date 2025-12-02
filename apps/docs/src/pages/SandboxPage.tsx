import { FlexyPanel, FlexyPanelGroup } from "react-flexy-panels";
import { FlexyHandle } from "../components";
import { Button } from "@rlx-widgets/button";
import { useState } from "react";

export const SandboxPage = () => {
  const [panel2Open, setPanel2Open] = useState(true);
  return (
    <div>
      <div className="h-full w-full border">
        <FlexyPanelGroup direction="horizontal">
          <FlexyPanel defaultSize={33}>
            <div className="flex items-center justify-center h-100">
              Panel 1
            </div>
          </FlexyPanel>
          {panel2Open && (
            <>
              <FlexyHandle />
              <FlexyPanel defaultSize={33}>
                <div className="flex items-center justify-center h-100">
                  Panel 2
                </div>
              </FlexyPanel>
            </>
          )}
          <FlexyHandle />
          <FlexyPanel defaultSize={34}>
            <div className="flex items-center justify-center h-100">
              Panel 3
            </div>
          </FlexyPanel>
        </FlexyPanelGroup>
      </div>
      <div className="flex justify-center mt-4">
        <Button variant="outline" onClick={() => setPanel2Open(!panel2Open)}>
          Toggle Panel 2
        </Button>
      </div>
    </div>
  );
};

export default SandboxPage;
