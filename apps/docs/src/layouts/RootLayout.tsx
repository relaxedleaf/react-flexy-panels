import { Button } from "@rlx-widgets/button";
import { cn, ThemeProvider } from "@rlx-widgets/base";
import { Code, FileText, Palette, Play, Rocket } from "lucide-react";
import { FlexyHandle, TopNav } from "../components";
import { FlexyPanel, FlexyPanelGroup, FlexyPanelRef } from "react-flexy-panels";
import { Link, useLocation } from "react-router";
import { ReactNode, useEffect, useRef } from "react";
import { useIsMobile } from "@rlx-hooks/use-is-mobile";

const navigation = [
  { name: "Demo", path: "/", icon: Play },
  { name: "Getting Started", path: "/getting-started", icon: Rocket },
  { name: "API Reference", path: "/api", icon: FileText },
  { name: "Examples", path: "/examples", icon: Code },
  { name: "Styling Guide", path: "/styling", icon: Palette },
];

export const RootLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const sidePanelRef = useRef<FlexyPanelRef | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      // 18 * 4 = 72
      sidePanelRef.current?.setSize({ size: 72, unit: "px" });
    }
  }, [isMobile, sidePanelRef]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div className="[--header-height:calc(--spacing(14))]">
        <TopNav />
        <div className="h-[calc(100vh-var(--header-height)-1px)]">
          <FlexyPanelGroup direction="horizontal" className="h-full">
            <FlexyPanel
              ref={sidePanelRef}
              defaultSize={250}
              defaultSizeUnit="px"
              className="flex flex-col"
            >
              <nav className="p-4 flex flex-col gap-2 shrink-0">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.path} to={item.path}>
                      <Button
                        variant={
                          location.pathname === item.path
                            ? "secondary"
                            : "ghost"
                        }
                        className="w-full justify-start gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {isMobile ? null : item.name}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            </FlexyPanel>
            <FlexyHandle withHandle />
            <FlexyPanel defaultSize="auto" className="overflow-y-auto">
              <div
                className={cn(
                  location.pathname === "/"
                    ? "h-full"
                    : "min-h-full max-w-4xl mx-auto p-8"
                )}
              >
                {children}
              </div>
            </FlexyPanel>
          </FlexyPanelGroup>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
