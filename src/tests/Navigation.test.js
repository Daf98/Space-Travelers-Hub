import React from "react";
import renderer from "react-test-renderer";
import Navigation from '../components/Navigation';

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Navigation />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});