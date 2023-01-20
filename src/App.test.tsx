import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App tests', () => {

  it('should contains the main div', () => {
    const { container } = render(<App />, { wrapper: BrowserRouter });
    const mainDiv = container.getElementsByClassName('app');
    expect(container).toBeTruthy();
    expect(mainDiv).toBeDefined();
  });

  it('should log console warning when landing on a bad page', () => {

    const badRoute = '/some/bad/route';
    jest.spyOn(console, 'warn').mockImplementation();

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )

    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining('No routes matched location "/some/bad/route"'),
    )
  });

  it('should load the HomePage', () => {

    const currentRoute = '/';

    const { container } = render(
      <MemoryRouter initialEntries={[currentRoute]}>
        <App />
      </MemoryRouter>,
    );

    const homePageMainDiv = container.getElementsByClassName('list-books');
    expect(homePageMainDiv).toBeDefined();
  });

  it('should load the SearchPage', () => {

    const currentRoute = '/search';

    const { container } = render(
      <MemoryRouter initialEntries={[currentRoute]}>
        <App />
      </MemoryRouter>,
    );

    const searchPageMainDiv = container.getElementsByClassName('search-books');
    
    expect(searchPageMainDiv).toBeDefined();
    expect(screen.getAllByPlaceholderText(/Search by title, author, or ISBN/i)).toBeTruthy();
  });

});