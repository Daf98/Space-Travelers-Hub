import React from "react";
import { MemoryRouter } from 'react-router-dom';
import renderer from "react-test-renderer";
import App from '../App';

describe('Body of the whole App', () => {
    it('renders correctly', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <App />
          </MemoryRouter>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
});