import { CodePreviewTabs } from "@rlx-components/code-preview-tabs";
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
} from "@rlx-widgets/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@rlx-widgets/card";
import { FlexyPanelGroup, FlexyPanel, FlexyPanelHandle } from "react-flexy-panels";
import { cn } from "@rlx-widgets/base";

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

const StyledHandleExample = () => {
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
};

const customHandleCode = `import { cn } from "clsx"; // or your preferred className utility
import { FlexyPanelHandle } from "react-flexy-panels";

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
};`;

const inlineStylesCode = `<FlexyPanelHandle 
  style={{ 
    backgroundColor: "#e0e0e0",
    cursor: "col-resize",
    width: "4px"
  }}
/>`;

const classNameCode = `<FlexyPanelHandle className="custom-handle" />

/* CSS */
.custom-handle {
  background-color: #e0e0e0;
  cursor: col-resize;
  width: 4px;
}

.custom-handle:hover {
  background-color: #b0b0b0;
}`;

export const StylingGuidePage = () => {
  return (
    <div className="space-y-8">
      <div>
        <Heading1>Styling Guide</Heading1>
        <Paragraph className="text-muted-foreground mt-4">
          Learn how to customize the appearance of react-flexy-panels components
          to match your design system.
        </Paragraph>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Styling Approaches</CardTitle>
          <CardDescription>
            The components use minimal inline styles for layout. You can
            customize appearance using:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Passing <code>style</code> props to components</li>
            <li>Using CSS classes with the <code>className</code> prop</li>
            <li>Targeting the component's HTML structure with CSS selectors</li>
          </ul>
        </CardContent>
      </Card>

      <div>
        <Heading2>Custom Handle Styling</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          The handle component includes a <code>data-direction</code> attribute
          that you can use to style handles differently for horizontal and
          vertical layouts. Here's a fully styled handle using Tailwind CSS:
        </Paragraph>
        <CodePreviewTabs
          preview={<StyledHandleExample />}
          code={customHandleCode}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>

      {/* <div>
        <Heading2>Using Inline Styles</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          You can pass inline styles directly to components:
        </Paragraph>
        <CodePreviewTabs
          code={inlineStylesCode}
          preview={<div className="h-full flex items-center justify-center bg-muted/50 rounded">Inline Styles Example</div>}
          lang="tsx"
          classNames={{ preview: "h-[150px]", code: "h-[150px]" }}
        />
      </div>

      <div>
        <Heading2>Using CSS Classes</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          You can also use CSS classes for styling:
        </Paragraph>
        <CodePreviewTabs
          code={classNameCode}
          preview={<div className="h-full flex items-center justify-center bg-muted/50 rounded">CSS Classes Example</div>}
          lang="tsx"
          classNames={{ preview: "h-[200px]", code: "h-[200px]" }}
        />
      </div> */}

      <Card>
        <CardHeader>
          <CardTitle>Data Attributes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Heading3 className="text-sm font-semibold mb-2">
                data-direction
              </Heading3>
              <Paragraph className="text-sm text-muted-foreground">
                The <code>FlexyPanelHandle</code> component includes a{" "}
                <code>data-direction</code> attribute that can be either{" "}
                <code>"horizontal"</code> or <code>"vertical"</code>. Use this
                to style handles differently based on their orientation.
              </Paragraph>
            </div>
            <div>
              <Heading3 className="text-sm font-semibold mb-2">data-unit</Heading3>
              <Paragraph className="text-sm text-muted-foreground">
                The <code>FlexyPanel</code> component includes a{" "}
                <code>data-unit</code> attribute that indicates the size unit
                (<code>"px"</code>, <code>"%"</code>, or <code>"auto"</code>).
              </Paragraph>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Styling Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Use the <code>data-direction</code> attribute to apply different
              styles for horizontal and vertical handles
            </li>
            <li>
              Consider adding hover states to make handles more discoverable
            </li>
            <li>
              Use pseudo-elements (like <code>::after</code>) to create larger
              hit areas for better UX
            </li>
            <li>
              Ensure handles have sufficient contrast and are clearly visible
            </li>
            <li>
              Set appropriate cursor styles (<code>col-resize</code> for
              horizontal, <code>row-resize</code> for vertical)
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

