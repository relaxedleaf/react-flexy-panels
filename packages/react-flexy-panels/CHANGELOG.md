# react-flexy-panels

## 1.4.1

### Patch Changes

- 5d214d3: feat: expose onPreResize prop on handle to allow any preprocess to be done before the panels are resized

## 1.4.0

### Minor Changes

- 46a5ec6: feat: enforce dragging on handle only

## 1.3.0

### Minor Changes

- b3a2995: support conditional rendering

## 1.2.0

### Minor Changes

- 86062b9: feat: add ref support to FlexyPanel to allow programmatilly set panel size

## 1.1.3

### Patch Changes

- 9453622: chore: update README

## 1.1.2

### Patch Changes

- 18bda30: fix: disable user select when dragging

## 1.1.1

### Patch Changes

- fc5b01b: fix: overflow issue for multiple panels
- 5e70d97: fix: panel jumps due to flex auto
- 0f09bc4: fix: set proper syntax for setting flex using js

## 1.1.0

### Minor Changes

- 1f93069: feat: add mobile / touch support

## 1.0.4

### Patch Changes

- 30068a3: chore: expose source code when publish
- 83083af: feat: implement forwardRef to FlexyPanelHandle
- 45eb47d: fix: overflow outside of parent container

## 1.0.3

### Patch Changes

- chore: update README

## 1.0.2

### Patch Changes

- chore: re-release 1.0.1 with correct build output

## 1.0.1

### Patch Changes

- chore: expose component props for FlexyPanelGroup and FlexyPanelHandle

## 1.0.0

### Major Changes

- Initial release of react-flexy-panels - A flexible, resizable panel system for React applications.

  ## Features

  - **Flexible Layouts**: Support for both horizontal and vertical panel arrangements
  - **Resizable Panels**: Drag handles to resize panels dynamically with smooth interactions
  - **TypeScript Support**: Full TypeScript support with comprehensive type definitions and discriminated unions for type-safe props
  - **Tree-shakeable**: Optimized build configuration with aggressive tree-shaking for minimal bundle size
  - **Lightweight**: Minimal dependencies - only React >= 18.0.0 as a peer dependency
  - **Flexible Sizing**: Support for pixel (`px`), percentage (`%`), and auto-sizing units with intelligent size calculations
  - **Customizable Handles**: Fully customizable drag handles with data attributes for conditional styling (supports both horizontal and vertical layouts)

  ## Components

  - `FlexyPanelGroup`: Container component that manages panel layout direction and context
  - `FlexyPanel`: Individual panel component with flexible sizing options
  - `FlexyPanelHandle`: Draggable handle component for resizing adjacent panels

  ## Technical Highlights

  - Built with Vite and optimized for production
  - ES module format with tree-shaking optimizations
  - Side-effect free for maximum bundle optimization
  - React 18+ compatible with modern hooks patterns
  - Comprehensive error handling and edge case management
