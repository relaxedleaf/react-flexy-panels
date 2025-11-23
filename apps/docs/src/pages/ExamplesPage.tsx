import { cn } from "@rlx-widgets/base";
import { CodePreviewTabs } from "@rlx-components/code-preview-tabs";
import {
  FlexyPanel,
  FlexyPanelGroup,
  FlexyPanelHandle,
} from "react-flexy-panels";
import { Heading1, Heading2, Paragraph } from "@rlx-widgets/typography";

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

const BasicExample = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={30} defaultSizeUnit="%">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <div className="text-center">
            <p className="font-semibold">Left Panel</p>
            <p className="text-sm text-muted-foreground">30% width</p>
          </div>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <div className="text-center">
            <p className="font-semibold">Right Panel</p>
            <p className="text-sm text-muted-foreground">Auto size</p>
          </div>
        </div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};

const basicExampleCode = `import { FlexyPanelGroup, FlexyPanel, FlexyPanelHandle } from "react-flexy-panels";

function App() {
  return (
    <FlexyPanelGroup direction="horizontal">
      <FlexyPanel defaultSize={30} defaultSizeUnit="%">
        <div>Left Panel</div>
      </FlexyPanel>
      
      <FlexyPanelHandle />
      
      <FlexyPanel defaultSize="auto">
        <div>Right Panel</div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
}`;

const VerticalExample = () => {
  return (
    <FlexyPanelGroup direction="vertical" className="h-full">
      <FlexyPanel defaultSize={200} defaultSizeUnit="px">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <div className="text-center">
            <p className="font-semibold">Top Panel</p>
            <p className="text-sm text-muted-foreground">200px height</p>
          </div>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <div className="text-center">
            <p className="font-semibold">Bottom Panel</p>
            <p className="text-sm text-muted-foreground">Auto size</p>
          </div>
        </div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};

const verticalExampleCode = `<FlexyPanelGroup direction="vertical">
  <FlexyPanel defaultSize={200} defaultSizeUnit="px">
    <div>Top Panel</div>
  </FlexyPanel>
  
  <FlexyPanelHandle />
  
  <FlexyPanel defaultSize="auto">
    <div>Bottom Panel</div>
  </FlexyPanel>
</FlexyPanelGroup>`;

const MultiplePanelsExample = () => {
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
};

const multiplePanelsExampleCode = `<FlexyPanelGroup direction="horizontal">
  <FlexyPanel defaultSize={25} defaultSizeUnit="%">
    <div>Panel 1</div>
  </FlexyPanel>
  
  <FlexyPanelHandle />
  
  <FlexyPanel defaultSize={50} defaultSizeUnit="%">
    <div>Panel 2</div>
  </FlexyPanel>
  
  <FlexyPanelHandle />
  
  <FlexyPanel defaultSize="auto">
    <div>Panel 3</div>
  </FlexyPanel>
</FlexyPanelGroup>`;

const NestedExample = () => {
  return (
    <FlexyPanelGroup direction="horizontal" className="h-full">
      <FlexyPanel defaultSize={200} defaultSizeUnit="px">
        <div className="h-full flex items-center justify-center bg-muted/50 rounded">
          <p className="font-semibold">Sidebar</p>
        </div>
      </FlexyPanel>
      <Handle />
      <FlexyPanel defaultSize="auto">
        <FlexyPanelGroup direction="vertical" className="h-full">
          <FlexyPanel defaultSize="auto">
            <div className="h-full flex items-center justify-center bg-muted/50 rounded">
              <p className="font-semibold">Main Content</p>
            </div>
          </FlexyPanel>
          <Handle />
          <FlexyPanel defaultSize={50} defaultSizeUnit="px">
            <div className="h-full flex items-center justify-center bg-muted/50 rounded">
              <p className="font-semibold">Footer</p>
            </div>
          </FlexyPanel>
        </FlexyPanelGroup>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
};

const nestedExampleCode = `<FlexyPanelGroup direction="horizontal">
  <FlexyPanel defaultSize={200} defaultSizeUnit="px">
    <div>Sidebar</div>
  </FlexyPanel>
  
  <FlexyPanelHandle />
  
  <FlexyPanel defaultSize="auto">
    <FlexyPanelGroup direction="vertical">
      <FlexyPanel defaultSize="auto">
        <div>Main Content</div>
      </FlexyPanel>
      
      <FlexyPanelHandle />
      
      <FlexyPanel defaultSize={50} defaultSizeUnit="px">
        <div>Footer</div>
      </FlexyPanel>
    </FlexyPanelGroup>
  </FlexyPanel>
</FlexyPanelGroup>`;

export const ExamplesPage = () => {
  return (
    <div className="space-y-16">
      <div>
        <Heading1>Examples</Heading1>
        <Paragraph className="text-muted-foreground mt-4">
          Interactive examples demonstrating various use cases for
          react-flexy-panels.
        </Paragraph>
      </div>

      <div>
        <Heading2>Basic Horizontal Layout</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          A simple two-panel horizontal layout with one fixed-size panel and one
          auto-sized panel.
        </Paragraph>
        <CodePreviewTabs
          preview={<BasicExample />}
          code={basicExampleCode}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>

      <div>
        <Heading2>Vertical Layout</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          A vertical layout with a fixed-height top panel and an auto-sized
          bottom panel.
        </Paragraph>
        <CodePreviewTabs
          preview={<VerticalExample />}
          code={verticalExampleCode}
          lang="tsx"
          classNames={{ preview: "h-[500px]", code: "h-[500px]" }}
        />
      </div>

      <div>
        <Heading2>Multiple Panels</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          A layout with three panels, demonstrating multiple resizable panels in
          a single group.
        </Paragraph>
        <CodePreviewTabs
          preview={<MultiplePanelsExample />}
          code={multiplePanelsExampleCode}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>

      <div>
        <Heading2>Nested Panels</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          Nested panel groups allow you to create complex layouts with both
          horizontal and vertical arrangements.
        </Paragraph>
        <CodePreviewTabs
          preview={<NestedExample />}
          code={nestedExampleCode}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>
    </div>
  );
};
