# react-flexy-panels

A flexible, resizable panel system for React applications version >= 18 with support for horizontal and vertical layouts.

**📖 [Live Documentation & Demo](https://relaxedleaf.github.io/react-flexy-panels)**

## Features

- 🎨 **Flexible Layouts** - Support for both horizontal and vertical panel arrangements
- 🔄 **Resizable Panels** - Drag handles to resize panels dynamically
- 📦 **Tree-shakeable** - Optimized for minimal bundle size
- 🎯 **TypeScript** - Full TypeScript support with type definitions
- 🪶 **Lightweight** - Minimal dependencies, only React as a peer dependency
- 🎛️ **Customizable** - Support for pixel, percentage, and auto-sizing units

## Installation

```bash
npm install react-flexy-panels
```

```bash
yarn add react-flexy-panels
```

```bash
pnpm add react-flexy-panels
```

## Usage

### Basic Example

```tsx
import {
  FlexyPanelGroup,
  FlexyPanel,
  FlexyPanelHandle,
} from "react-flexy-panels";

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
}
```

### Vertical Layout

```tsx
<FlexyPanelGroup direction="vertical">
  <FlexyPanel defaultSize={200} defaultSizeUnit="px">
    <div>Top Panel (200px)</div>
  </FlexyPanel>

  <FlexyPanelHandle />

  <FlexyPanel defaultSize="auto">
    <div>Bottom Panel (fills remaining space)</div>
  </FlexyPanel>
</FlexyPanelGroup>
```

### Multiple Panels

```tsx
<FlexyPanelGroup direction="horizontal">
  <FlexyPanel defaultSize={25} defaultSizeUnit="%">
    <div>Panel 1</div>
  </FlexyPanel>

  <FlexyPanelHandle />

  <FlexyPanel defaultSize={50} defaultSizeUnit="%">
    <div>Panel 2</div>
  </FlexyPanel>

  <FlexyPanelHandle />

  <FlexyPanel defaultSize="auto">
    <div>Panel 3</div>
  </FlexyPanel>
</FlexyPanelGroup>
```

## API Reference

### FlexyPanelGroup

The container component that manages panels and their layout direction.

#### Props

| Prop        | Type                         | Required | Description                 |
| ----------- | ---------------------------- | -------- | --------------------------- |
| `direction` | `"horizontal" \| "vertical"` | Yes      | Layout direction for panels |
| `children`  | `React.ReactNode`            | Yes      | Panel and handle components |
| `style`     | `React.CSSProperties`        | No       | Additional CSS styles       |
| `...props`  | `div` HTML attributes        | No       | All standard div props      |

#### Example

```tsx
<FlexyPanelGroup direction="horizontal" style={{ height: "100vh" }}>
  {/* panels */}
</FlexyPanelGroup>
```

### FlexyPanel

Individual panel component that displays content.

#### Props

| Prop              | Type                  | Required | Description                                                  |
| ----------------- | --------------------- | -------- | ------------------------------------------------------------ |
| `defaultSize`     | `number \| "auto"`    | Yes      | Initial size or "auto" for remaining space                   |
| `defaultSizeUnit` | `"px" \| "%"`         | No\*     | Unit for defaultSize (required when defaultSize is a number) |
| `children`        | `React.ReactNode`     | Yes      | Panel content                                                |
| `style`           | `React.CSSProperties` | No       | Additional CSS styles                                        |
| `...props`        | `div` HTML attributes | No       | All standard div props                                       |

\* `defaultSizeUnit` is not required when `defaultSize` is `"auto"`

#### Example

```tsx
<FlexyPanel defaultSize={300} defaultSizeUnit="px">
  <div>Fixed width panel</div>
</FlexyPanel>

<FlexyPanel defaultSize={30} defaultSizeUnit="%">
  <div>Percentage width panel</div>
</FlexyPanel>

<FlexyPanel defaultSize="auto">
  <div>Auto-sized panel</div>
</FlexyPanel>
```

### FlexyPanelHandle

Draggable handle component placed between panels to enable resizing.

#### Props

| Prop          | Type                                            | Required | Description               |
| ------------- | ----------------------------------------------- | -------- | ------------------------- |
| `onMouseDown` | `(e: React.MouseEvent<HTMLDivElement>) => void` | No       | Custom mouse down handler |
| `style`       | `React.CSSProperties`                           | No       | Additional CSS styles     |
| `...props`    | `div` HTML attributes                           | No       | All standard div props    |

#### Example

```tsx
<FlexyPanelHandle
  style={{ cursor: "col-resize" }}
  onMouseDown={(e) => console.log("Drag started")}
/>
```

## TypeScript

The library is written in TypeScript and includes full type definitions. All components and types are exported from the main entry point:

```tsx
import type { Direction } from "react-flexy-panels";
```

## Styling

The components use minimal inline styles for layout. You can customize appearance by:

1. Passing `style` props to components
2. Using CSS classes with the `className` prop
3. Targeting the component's HTML structure with CSS selectors

### Custom Handle Styling

```tsx
<FlexyPanelHandle
  className="custom-handle"
  style={{
    backgroundColor: "#e0e0e0",
    cursor: "col-resize",
    width: "4px",
  }}
/>
```

### Styling with Tailwind CSS

The handle component includes a `data-direction` attribute that you can use to style handles differently for horizontal and vertical layouts. Here's an example of a fully styled handle using Tailwind CSS:

```tsx
import { cn } from "clsx"; // or your preferred className utility
import { FlexyPanelHandle } from "react-flexy-panels";

const Handle = () => {
  return (
    <FlexyPanelHandle
      className={cn(
        "cursor-pointer relative flex items-center justify-center after:absolute after:bg-border",
        "data-[direction=vertical]:after:left-0 data-[direction=vertical]:after:top-[calc(50%-0.5px)] data-[direction=vertical]:after:h-px data-[direction=vertical]:after:w-full data-[direction=vertical]:cursor-row-resize",
        "data-[direction=horizontal]:after:inset-y-0 data-[direction=horizontal]:after:left-[calc(50%-0.5px)] data-[direction=horizontal]:after:w-px data-[direction=horizontal]:cursor-col-resize"
      )}
    />
  );
};
```

This example:

- Styles the handle differently for horizontal (`data-direction=horizontal`) and vertical (`data-direction=vertical`) layouts
- Adds a larger hover area using a pseudo-element (`after:`)
- Includes focus-visible styles for accessibility
- Automatically sets the correct cursor (`col-resize` for horizontal, `row-resize` for vertical)

## Requirements

- React >= 18.0.0
- React DOM >= 18.0.0

## License

MIT © [relaxedleaf](https://github.com/relaxedleaf)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/relaxedleaf/react-flexy-panels/issues) on GitHub.
