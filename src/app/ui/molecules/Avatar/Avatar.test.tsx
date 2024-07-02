import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render an avatar', () => {
    render(<Avatar>avatar</Avatar>);
    const avatarElement = screen.getByText(/avatar/i);
    expect(avatarElement).toBeInTheDocument();
  });
});
