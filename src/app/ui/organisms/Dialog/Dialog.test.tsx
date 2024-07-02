import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog Components', () => {
  it('should render a dialog', () => {
    render(<Dialog />);
  });
});
