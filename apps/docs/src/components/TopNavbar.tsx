import { Button } from "@rlx-widgets/button";
import { SiGithub } from "react-icons/si";
import { ThemeToggle } from "@rlx-components/theme-toggle";
import { Link } from "react-router";

export const TopNav = () => {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center justify-between px-4">
        <h1 className="text-ellipsis line-clamp-1">React Flexy Panels</h1>
        <div className="flex items-center">
          <Link
            to="https://github.com/relaxedleaf/react-flexy-panels"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <SiGithub className="h-6 w-6" />
              <span className="sr-only">Github</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
