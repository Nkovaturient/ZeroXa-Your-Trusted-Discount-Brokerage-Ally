import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Hero from '../Landing_page/Home/Hero'
import renderer from 'react-test-renderer'


//Test Suite
describe("Hero Component", ()=>{
    test('renders hero image', ()=>{
        render(<Hero />);
        const heroImage= screen.getByAltText("HeroImg");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png")
    });

    test('render signup button', ()=>{
        render(<Hero />);
        const button= screen.getByRole("button", {name: '/Sign up now/'});
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("btn-primary")
    });

});
