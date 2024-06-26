import { render } from '@testing-library/react';
import { Button } from './Button';
import { Slot } from '@radix-ui/react-slot';
import '@testing-library/jest-dom';
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
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });
});
