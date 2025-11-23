import { CodePreviewTabs } from "@rlx-components/code-preview-tabs";
import { examples } from "./_examples";
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

export const StylingGuidePage = () => {
  return (
    <div className="space-y-16">
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
            <li>
              Passing <code>style</code> props to components
            </li>
            <li>
              Using CSS classes with the <code>className</code> prop
            </li>
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
          preview={examples.Tailwind.preview}
          code={examples.Tailwind.code}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>

      <div>
        <Heading2>Using CSS Selectors</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          You can also use CSS selectors for styling:
        </Paragraph>
        <CodePreviewTabs
          code={examples.CSS.code}
          preview={examples.CSS.preview}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>

      <div>
        <Heading2>Using Inline Styles</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          You can pass inline styles directly to components:
        </Paragraph>
        <CodePreviewTabs
          code={examples.Inline.code}
          preview={examples.Inline.preview}
          lang="tsx"
          classNames={{ preview: "h-[300px]", code: "h-[300px]" }}
        />
      </div>

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
              <Heading3 className="text-sm font-semibold mb-2">
                data-unit
              </Heading3>
              <Paragraph className="text-sm text-muted-foreground">
                The <code>FlexyPanel</code> component includes a{" "}
                <code>data-unit</code> attribute that indicates the size unit (
                <code>"px"</code>, <code>"%"</code>, or <code>"auto"</code>).
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
