import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherCondition from './WeatherCondition';

describe('WeatherCondition', () => {
  it('renders correctly with all props', () => {
    render(<WeatherCondition imageSrc="test-image.jpg" imageAlt="Cloudy" title="Weather Title" condition="Cloudy" />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Cloudy');
    expect(screen.getByText('Cloudy')).toBeInTheDocument();
    expect(screen.getByText('Weather Title')).toBeInTheDocument();
  });

  it('renders without an image when imageSrc is not provided', () => {
    render(<WeatherCondition title="Weather Title" condition="Sunny" />);
    
    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(0);
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('Weather Title')).toBeInTheDocument();
  });

  it('renders with empty content when no props are provided', () => {
    const { container } = render(<WeatherCondition />);
    expect(container).toBeEmptyDOMElement();
  });
});
