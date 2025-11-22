import { render } from '@testing-library/react';

import ReactFlexyPanelsReactFlexyPanels from './react-flexy-panels';

describe('ReactFlexyPanelsReactFlexyPanels', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFlexyPanelsReactFlexyPanels />);
    expect(baseElement).toBeTruthy();
  });
  
});
