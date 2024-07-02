import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('should render a label', () => {
    render(<Label />);
  });
  it('should display the correct content', () => {
    render(<Label>label</Label>);
    const labelElement = screen.getByText(/label/i);
    expect(labelElement).toBeInTheDocument();
  });
});
