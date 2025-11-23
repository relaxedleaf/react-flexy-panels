"use client";

import { cn } from "@rlx-widgets/base";
import { ReactNode } from "react";

export const InlineCode = ({ className, code, children }: InlineCodeProps) => {
  return (
    <span
      className={cn(
        "bg-muted rounded px-1 py-0.5 overflow-x-auto text-sm",
        className
      )}
    >
      <code>{code ?? children}</code>
    </span>
  );
};
type InlineCodeProps =
  | { code: string; children?: never; className?: string }
  | { children: ReactNode; code?: never; className?: string };

export default InlineCode;
