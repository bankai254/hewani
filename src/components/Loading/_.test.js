/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from './Loading';

describe('Loading Component', () => {
    it('renders correctly', () => {
        render(<Loading />);

        // Check if the SVG is in the document
        const svgElement = screen.getByRole('img', { hidden: true }); // SVGs are treated as images, but they're often hidden to assistive technologies
        expect(svgElement).toBeInTheDocument();

        // You could add more checks here if you have specific attributes you want to test
        expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
        expect(svgElement).toHaveAttribute('viewBox', '0 0 24 24');

        // Check for parts of the SVG if necessary, like circles or paths
        const circle = screen.getByRole('img', { hidden: true }).querySelector('circle');
        expect(circle).toHaveAttribute('cx', '12');
        expect(circle).toHaveAttribute('cy', '12');
        expect(circle).toHaveAttribute('r', '10');

        const path = screen.getByRole('img', { hidden: true }).querySelector('path');
        expect(path).toHaveAttribute('fill', 'currentColor');
    });
});
