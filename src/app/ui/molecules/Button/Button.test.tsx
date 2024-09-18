import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { Slot } from '@radix-ui/react-slot';

describe('Button', () => {
  it('should render a button', () => {
    render(<Button />);
  });

  it('should render a button as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <Slot />
      </Button>
    );
  });

  it('should display the correct content', () => {
    render(<Button>button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply the default variant and size classes', () => {
    render(<Button>button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toHaveClass(
      'bg-primary text-primary-foreground h-10 px-4 py-2'
    );
  });

  it('should apply the correct variant class', () => {
    render(<Button variant="destructive">button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toHaveClass(
      'bg-destructive text-destructive-foreground'
    );
  });

  it('should apply the correct size class', () => {
    render(<Button size="lg">button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toHaveClass('h-11 rounded-md px-8');
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>button</Button>);
    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).toBeDisabled();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>button</Button>);
    const buttonElement = screen.getByText(/button/i);
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
