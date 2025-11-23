export const code = `import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
} from "react-flexy-panels";

const Handle = () => {
  return (
    <>
      <style>{\`
        [data-handle-inline] {
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        [data-handle-inline][data-direction="vertical"] {
          width: 100%;
          cursor: row-resize;
        }
        [data-handle-inline][data-direction="horizontal"] {
          height: 100%;
          cursor: col-resize;
        }
        [data-handle-inline]::after {
          content: "";
          position: absolute;
          background-color: var(--border, hsl(var(--border)));
        }
        [data-handle-inline][data-direction="vertical"]::after {
          left: 0;
          top: calc(50% - 0.5px);
          height: 1px;
          width: 100%;
        }
        [data-handle-inline][data-direction="horizontal"]::after {
          top: 0;
          bottom: 0;
          left: calc(50% - 0.5px);
          width: 1px;
        }
      \`}</style>
      <FlexyPanelHandle data-handle-inline />
    </>
  );
};

export const Preview = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={30} defaultSizeUnit="%">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p>Left Panel</p>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p>Right Panel</p>
        </div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};`