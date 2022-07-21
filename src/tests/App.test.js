import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import store from '../redux/configureStore';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return text from the Missions page', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDom = screen.findByText(
        /Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat./,
      );
      expect(waitForDom).not.toBeNull();
    });
  });

  it('should return text from the Rockets page', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      const waitForDom = screen.findByText(
        /Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars./,
      );
      expect(waitForDom).not.toBeNull();
    });
  });
});
