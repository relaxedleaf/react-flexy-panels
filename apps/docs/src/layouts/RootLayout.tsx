import { ReactNode } from "react";
import { ThemeProvider } from "@rlx-widgets/base";
import { TopNav } from "../components";

export const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="[--header-height:calc(--spacing(14))]">
        <TopNav />
        <div className="h-[calc(100vh-var(--header-height)-1px)]">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
