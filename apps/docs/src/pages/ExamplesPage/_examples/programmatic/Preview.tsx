import { cn } from "@rlx-widgets/base";
import { Label } from "@rlx-widgets/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@rlx-widgets/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rlx-widgets/select";
import { useRef, useState } from "react";
import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
  type FlexyPanelRef,
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

const getPanelSizeText = (size: string, unit: SizeUnit): string => {
  if (unit === "auto") {
    return "Auto size";
  }
  if (size && size.trim() !== "") {
    return `${size}${unit}`;
  }
  return "Auto size";
};

const PanelContent = ({
  panelNumber,
  appliedSize,
  appliedUnit,
}: PanelContentProps) => {
  return (
    <div className="h-full flex items-center justify-center bg-muted/50 rounded">
      <div className="text-center">
        <p className="font-semibold">Panel {panelNumber}</p>
        <p className="text-sm text-muted-foreground">
          {getPanelSizeText(appliedSize, appliedUnit)}
        </p>
      </div>
    </div>
  );
};

const PanelControls = ({
  panelNumber,
  panelState,
  onSizeChange,
  onUnitChange,
  onSetSize,
}: PanelControlsProps) => {
  const isAuto = panelState.unit === "auto";

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Panel {panelNumber} Size</Label>
      <InputGroup>
        {!isAuto && (
          <InputGroupInput
            type="text"
            value={panelState.size}
            onChange={(e) => onSizeChange(panelNumber - 1, e.target.value)}
            placeholder="Enter"
          />
        )}
        <InputGroupAddon align="inline-end" className={isAuto ? "flex-1" : ""}>
          <Select
            value={panelState.unit}
            onValueChange={(value) =>
              onUnitChange(panelNumber - 1, value as SizeUnit)
            }
          >
            <SelectTrigger
              className={
                isAuto
                  ? "w-full border-0 shadow-none"
                  : "w-[80px] border-0 shadow-none"
              }
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">auto</SelectItem>
              <SelectItem value="%">%</SelectItem>
              <SelectItem value="px">px</SelectItem>
            </SelectContent>
          </Select>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => onSetSize(panelNumber - 1)}>
            Set
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export const Preview = () => {
  const panel1Ref = useRef<FlexyPanelRef>(null);
  const panel2Ref = useRef<FlexyPanelRef>(null);
  const panel3Ref = useRef<FlexyPanelRef>(null);

  const panelRefs = [panel1Ref, panel2Ref, panel3Ref];

  const [panels, setPanels] = useState<PanelState[]>([
    { size: "", unit: "auto", appliedSize: "", appliedUnit: "auto" },
    { size: "", unit: "auto", appliedSize: "", appliedUnit: "auto" },
    { size: "", unit: "auto", appliedSize: "", appliedUnit: "auto" },
  ]);

  const updatePanel = (index: number, updates: Partial<PanelState>) => {
    setPanels((prev) =>
      prev.map((panel, i) => (i === index ? { ...panel, ...updates } : panel))
    );
  };

  const handleSizeChange = (index: number, size: string) => {
    updatePanel(index, { size });
  };

  const handleUnitChange = (index: number, unit: SizeUnit) => {
    updatePanel(index, {
      unit,
      size: unit === "auto" ? "" : panels[index].size,
    });
  };

  const handleSetSize = (index: number) => {
    const panel = panels[index];
    const ref = panelRefs[index];

    if (!ref.current) return;

    if (panel.unit === "auto") {
      ref.current.setSize({ size: "auto" });
      updatePanel(index, { appliedSize: "", appliedUnit: "auto" });
    } else {
      const numSize = parseFloat(panel.size);
      if (!isNaN(numSize) && numSize > 0) {
        ref.current.setSize({ size: numSize, unit: panel.unit });
        updatePanel(index, {
          appliedSize: panel.size,
          appliedUnit: panel.unit,
        });
      }
    }
  };

  return (
    <div>
      <div className="h-[200px]">
        <FlexyPanelGroup direction="horizontal" className="flex-1">
          <FlexyPanel ref={panelRefs[0]} defaultSize="auto">
            <PanelContent
              panelNumber={1}
              appliedSize={panels[0].appliedSize}
              appliedUnit={panels[0].appliedUnit}
            />
          </FlexyPanel>
          <Handle />
          <FlexyPanel ref={panelRefs[1]} defaultSize="auto">
            <PanelContent
              panelNumber={2}
              appliedSize={panels[1].appliedSize}
              appliedUnit={panels[1].appliedUnit}
            />
          </FlexyPanel>
          <Handle />
          <FlexyPanel ref={panelRefs[2]} defaultSize="auto">
            <PanelContent
              panelNumber={3}
              appliedSize={panels[2].appliedSize}
              appliedUnit={panels[2].appliedUnit}
            />
          </FlexyPanel>
        </FlexyPanelGroup>
      </div>

      <div className="border-t pt-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {panels.map((panel, index) => (
            <PanelControls
              key={index}
              panelNumber={index + 1}
              panelState={panel}
              onSizeChange={handleSizeChange}
              onUnitChange={handleUnitChange}
              onSetSize={handleSetSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type SizeUnit = "px" | "%" | "auto";

type PanelState = {
  size: string;
  unit: SizeUnit;
  appliedSize: string;
  appliedUnit: SizeUnit;
};

type PanelContentProps = {
  panelNumber: number;
  appliedSize: string;
  appliedUnit: SizeUnit;
};

type PanelControlsProps = {
  panelNumber: number;
  panelState: PanelState;
  onSizeChange: (index: number, size: string) => void;
  onUnitChange: (index: number, unit: SizeUnit) => void;
  onSetSize: (index: number) => void;
};
