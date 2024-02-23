import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Index from '../pages/index'
import { act } from 'react-dom/test-utils';

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/index',
    }),
  }))

describe('Index', () => {
  it('renders index page', async () => {
    await act(async () => {
      render(<Index />);
    });
    expect(screen.getByText('Katie Amaral')).toBeInTheDocument();
  });
});
