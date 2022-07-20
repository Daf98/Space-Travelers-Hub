import React from "react";
import renderer from "react-test-renderer";
import Profile from '../components/Profile';

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Profile />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});