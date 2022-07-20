import React from "react";
import renderer from "react-test-renderer";
import Missions from '../components/Missions';

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Missions />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});