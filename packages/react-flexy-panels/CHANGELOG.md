# react-flexy-panels

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
