export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="block p-3 bg-muted rounded text-sm mt-4">{children}</code>
  );
};
