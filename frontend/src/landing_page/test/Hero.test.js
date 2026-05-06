import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../home/Hero';

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero Image');//attribute
        expect(heroImage).toBeInTheDocument();//uska presence in the document
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");//attribute ka check
    });
});