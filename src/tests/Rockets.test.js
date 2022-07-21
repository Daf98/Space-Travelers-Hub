import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';
import rocketsReducer from '../redux/rockets/rockets';
import fetchRocketsFromAPI from '../redux/api';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return an empty state', () => {
    const newState = rocketsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return content from the rocket API', () => {
    const rocketAPI = fetchRocketsFromAPI();
    expect(rocketAPI).not.toEqual(null);
  });
});
