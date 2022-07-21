import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../components/Missions';
import store from '../redux/configureStore';
import missionsReducer, { fetchMissions } from '../redux/missions/missions';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Missions />
        </Provider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Mission Reducer Function', () => {
    const newState = missionsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('It should return content from the API', () => {
    const missionAPI = fetchMissions();
    expect(missionAPI).not.toEqual(null);
  });
});
