import { CodePreviewTabs } from "@rlx-components/code-preview-tabs";
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
} from "@rlx-widgets/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@rlx-widgets/card";
import { InlineCode } from "../../components";
import { variants } from "./_examples";

const basicExamplePreview = (
  <div className="flex h-full items-center justify-center bg-muted/50 rounded">
    <div className="text-center">
      <div className="mb-2 p-4 bg-background rounded border">Left Panel</div>
      <div className="p-4 bg-background rounded border">Right Panel</div>
    </div>
  </div>
);

const basicExampleCode = `import { FlexyPanelGroup, FlexyPanel, FlexyPanelHandle } from "react-flexy-panels";

function App() {
  return (
    <FlexyPanelGroup direction="horizontal">
      <FlexyPanel defaultSize={30} defaultSizeUnit="%">
        <div>Left Panel</div>
      </FlexyPanel>
      
      <FlexyPanelHandle />
      
      <FlexyPanel defaultSize="auto">
        <div>Right Panel (auto size)</div>
      </FlexyPanel>
    </FlexyPanelGroup>
  );
}`;

const verticalExamplePreview = (
  <div className="flex flex-col h-full items-center justify-center bg-muted/50 rounded">
    <div className="text-center w-full">
      <div className="mb-2 p-4 bg-background rounded border">
        Top Panel (200px)
      </div>
      <div className="p-4 bg-background rounded border">
        Bottom Panel (fills remaining space)
      </div>
    </div>
  </div>
);

const verticalExampleCode = `<FlexyPanelGroup direction="vertical">
  <FlexyPanel defaultSize={200} defaultSizeUnit="px">
    <div>Top Panel (200px)</div>
  </FlexyPanel>
  
  <FlexyPanelHandle />
  
  <FlexyPanel defaultSize="auto">
    <div>Bottom Panel (fills remaining space)</div>
  </FlexyPanel>
</FlexyPanelGroup>`;

export const GettingStartedPage = () => {
  return (
    <div className="space-y-16">
      <div>
        <Heading1>Getting Started</Heading1>
        <Paragraph className="text-muted-foreground mt-4">
          A flexible, resizable panel system for React applications with support
          for horizontal and vertical layouts.
        </Paragraph>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Installation</CardTitle>
            <CardDescription>
              Install react-flexy-panels using your preferred package manager
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Heading3 className="text-sm font-semibold mb-2">npm</Heading3>
                <code className="block p-3 bg-muted rounded text-sm">
                  npm install react-flexy-panels
                </code>
              </div>
              <div>
                <Heading3 className="text-sm font-semibold mb-2">yarn</Heading3>
                <code className="block p-3 bg-muted rounded text-sm">
                  yarn add react-flexy-panels
                </code>
              </div>
              <div>
                <Heading3 className="text-sm font-semibold mb-2">pnpm</Heading3>
                <code className="block p-3 bg-muted rounded text-sm">
                  pnpm add react-flexy-panels
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Heading2>Requirements</Heading2>
        <Paragraph className="text-muted-foreground mt-2">
          React Flexy Panels requires{" "}
          <InlineCode>{`React >=18.0.0`}</InlineCode>.
        </Paragraph>
      </div>

      <div>
        <Heading2>Basic Example</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          Here's a simple example of a horizontal layout with two panels:
        </Paragraph>
        <div>
          <CodePreviewTabs
            preview={variants.Default.preview}
            code={variants.Default.code}
            lang="tsx"
            classNames={{ preview: "h-[500px]", code: "h-[500px]" }}
          />
        </div>
      </div>

      <div>
        <Heading2>Vertical Layout</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          You can also create vertical layouts by setting the direction to
          "vertical":
        </Paragraph>
        <CodePreviewTabs
          preview={variants.Vertical.preview}
          code={variants.Vertical.code}
          lang="tsx"
          classNames={{ preview: "h-[500px]", code: "h-[500px]" }}
        />
      </div>

      <div>
        <Heading2>Custom Handle</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          You can also create a handle between panels to enable resizing:
        </Paragraph>
        <CodePreviewTabs
          preview={variants.Handle.preview}
          code={variants.Handle.code}
          lang="tsx"
          classNames={{ preview: "h-[500px]", code: "h-[500px]" }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>FlexyPanelGroup</strong> - The container component that
              manages panels and their layout direction
            </li>
            <li>
              <strong>FlexyPanel</strong> - Individual panel component that
              displays content
            </li>
            <li>
              <strong>FlexyPanelHandle</strong> - Draggable handle component
              placed between panels to enable resizing
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
