import { ThemeToggle } from "@rlx-components/theme-toggle";

export function TopNav() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1>React Flexy Panels</h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
