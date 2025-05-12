import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders title and subtitle', () => {
    render(<Card image="/Images/Principal.jpg" alt="Principal" title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByAltText('Principal')).toBeInTheDocument();
  });

  it('renders without subtitle', () => {
    render(<Card image="/Images/Principal.jpg" alt="Principal" title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
  });
});
