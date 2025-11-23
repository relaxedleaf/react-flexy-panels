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
import { CodeBlock } from "../components";

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
        <CodeBlock>
          import type {"{"} Direction {"}"} from "react-flexy-panels";
        </CodeBlock>
      </div>
    </div>
  );
};
