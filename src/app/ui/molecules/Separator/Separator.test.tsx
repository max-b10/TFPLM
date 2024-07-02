import { render, screen } from '@testing-library/react';
import { Separator } from './Separator';

describe('Separator', () => {
  it('should render a separator', () => {
    render(<Separator />);
  });
  it('should render a vertical separator when orientation is vertical', () => {
    render(<Separator role="separator" orientation="vertical" />);
    const separator = screen.getByRole('separator');
    expect(separator).toHaveClass('h-full w-[1px]');
  });
});
