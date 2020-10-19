import { render } from '@testing-library/svelte';
import App from './App.svelte'

describe('App component', () => {
    let renderResult;
    let component;

    beforeEach(() => {
        renderResult = render(App);
        component = renderResult.component;
    })

    it('should be instantiated', () => {
        expect(component).toBeDefined();
    })

    it('should have "Home" as link textContent', () => {
        const navlink = renderResult.getByTestId('home-link');
        expect(navlink.textContent).toEqual("Home");
    })
})
