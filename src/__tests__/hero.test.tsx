import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Hero from '../components/Sections/Hero';
import { heroData } from '../data/data';

describe('Hero Component', () => {
  it('renders hero component', () => {
    render(<Hero />);
    expect(screen.getByText(heroData.name)).toBeInTheDocument();
    expect(screen.getByAltText(`${heroData.name}-image`)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders all action buttons', () => {
    render(<Hero />);
    heroData.actions.forEach(action => {
      expect(screen.getByText(action.text)).toBeInTheDocument();
    });
  });

  it('renders social icons', () => {
    render(<Hero />);
    expect(screen.getByLabelText('Github')).toBeInTheDocument();
    expect(screen.getByLabelText('Stack Overflow')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

});
