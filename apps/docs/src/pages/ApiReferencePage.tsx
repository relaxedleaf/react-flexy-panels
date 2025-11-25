import { Heading1, Heading2, Paragraph } from "@rlx-widgets/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@rlx-widgets/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@rlx-widgets/table";
import { CodeBlock } from "@rlx-components/code-block";
import { ShikiCodeBlock } from "@rlx-components/shiki-code-block";
import { InlineCode } from "@rlx-components/inline-code";

export const ApiReferencePage = () => {
  return (
    <div className="space-y-16">
      <div>
        <Heading1>API Reference</Heading1>
        <Paragraph className="text-muted-foreground mt-4">
          Complete API documentation for all components in react-flexy-panels.
        </Paragraph>
      </div>

      <div>
        <Heading2>FlexyPanelGroup</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          The container component that manages panels and their layout
          direction.
        </Paragraph>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Props</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Required</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>direction</code>
                  </TableCell>
                  <TableCell>
                    <code>"horizontal" | "vertical"</code>
                  </TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>Layout direction for panels</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>...props</code>
                  </TableCell>
                  <TableCell>
                    <code>div HTML attributes</code>
                  </TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>All standard div props</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div>
        <Heading2>FlexyPanel</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          Individual panel component that displays content.
        </Paragraph>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Props</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Required</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>defaultSize</code>
                  </TableCell>
                  <TableCell>
                    <code>number | "auto"</code>
                  </TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>
                    Initial size or "auto" for remaining space
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>defaultSizeUnit</code>
                  </TableCell>
                  <TableCell>
                    <code>"px" | "%"</code>
                  </TableCell>
                  <TableCell>No*</TableCell>
                  <TableCell>
                    Unit for defaultSize (required when defaultSize is a number)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>ref</code>
                  </TableCell>
                  <TableCell>
                    <code>RefObject&lt;FlexyPanelRef&gt;</code>
                  </TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>
                    Ref to access panel methods for dynamic size control
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>...props</code>
                  </TableCell>
                  <TableCell>
                    <code>div HTML attributes</code>
                  </TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>All standard div props</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Paragraph className="text-sm text-muted-foreground mt-4">
              * <code>defaultSizeUnit</code> is not required when{" "}
              <code>defaultSize</code> is <code>"auto"</code>
            </Paragraph>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Ref API</CardTitle>
          </CardHeader>
          <CardContent>
            <Paragraph className="text-muted-foreground mb-4">
              The <code>FlexyPanel</code> component supports ref forwarding,
              allowing you to programmatically control panel size. The ref
              provides a <code>setSize</code> method for dynamic size updates.
            </Paragraph>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>setSize</code>
                  </TableCell>
                  <TableCell>
                    <InlineCode className="px-2">
                      <code>
                        {"("}
                        {"{"} size: "auto" {"}"} | {"{"} size: number, unit:
                        "px" | "%" {"}"}
                        {")"} =&gt; void
                      </code>
                    </InlineCode>
                  </TableCell>
                  <TableCell>
                    Dynamically set the panel size. Use{" "}
                    <code>
                      {"{"} size: "auto" {"}"}
                    </code>{" "}
                    for auto-sizing or{" "}
                    <code>
                      {"{"} size: number, unit: "px" | "%" {"}"}
                    </code>{" "}
                    for a specific size.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Paragraph className="text-sm text-muted-foreground mt-4 mb-2">
              Example usage:
            </Paragraph>
            <ShikiCodeBlock
              code={`import { useRef } from "react";
import { FlexyPanel, type FlexyPanelRef } from "react-flexy-panels";

function MyComponent() {
  const panelRef = useRef<FlexyPanelRef>(null);

  const handleResize = () => {
    // Set size to 300px
    panelRef.current?.setSize({ size: 300, unit: "px" });
    
    // Or set to 50% width
    panelRef.current?.setSize({ size: 50, unit: "%" });
    
    // Or set to auto
    panelRef.current?.setSize({ size: "auto" });
  };

  return (
    <FlexyPanel ref={panelRef} defaultSize={100} defaultSizeUnit="px">
      Content
    </FlexyPanel>
  );
}`}
              lang={"tsx"}
            ></ShikiCodeBlock>
          </CardContent>
        </Card>
      </div>

      <div>
        <Heading2>FlexyPanelHandle</Heading2>
        <Paragraph className="text-muted-foreground mt-2 mb-4">
          Draggable handle component placed between panels to enable resizing.
        </Paragraph>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Props</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Required</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>...props</code>
                  </TableCell>
                  <TableCell>
                    <code>div HTML attributes</code>
                  </TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>All standard div props</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div>
        <Heading2>TypeScript</Heading2>
        <Paragraph className="text-muted-foreground mt-2">
          The library is written in TypeScript and includes full type
          definitions. All components and types are exported from the main entry
          point:
        </Paragraph>
        <CodeBlock className="mt-4">
          {`import type { Direction, FlexyPanelRef } from "react-flexy-panels";`}
        </CodeBlock>
      </div>
    </div>
  );
};
