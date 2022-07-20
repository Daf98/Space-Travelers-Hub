import React from "react";
import renderer from "react-test-renderer";
import Rockets from '../components/Rockets';

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Rockets />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});