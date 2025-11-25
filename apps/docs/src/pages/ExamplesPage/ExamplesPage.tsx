import { cn } from "@rlx-widgets/base";
import { CodePreviewTabs } from "@rlx-components/code-preview-tabs";
import { examples } from "./_examples";
import { Heading1, Heading2, Paragraph } from "@rlx-widgets/typography";
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
          preview={examples.basic.preview}
          code={examples.basic.code}
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
          preview={examples.vertical.preview}
          code={examples.vertical.code}
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
          preview={examples.multiple.preview}
          code={examples.multiple.code}
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

      <div>
        <Heading2>Programmatic Size Control</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          Use the <code>ref</code> prop and <code>setSize</code> method to
          programmatically control panel sizes. This example demonstrates
          dynamic size updates using input fields.
        </Paragraph>
        <CodePreviewTabs
          preview={examples.programmatic.preview}
          code={examples.programmatic.code}
          lang="tsx"
          classNames={{ preview: "h-[425px] p-8 lg:p-14 overflow-y-scroll", code: "h-[425px]" }}
        />
      </div>
    </div>
  );
};
