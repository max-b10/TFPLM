import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('should render an input', () => {
    render(<Input />);
  });
  it('should display the correct content', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});
