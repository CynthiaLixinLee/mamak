import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Login from "../Login";

test("renders restaurant slogan", () => {
  const component = shallow(<Login />);
  const slogan = (
    <h3 className="slogan">
      We use the freshest produce and traditional recipies to create good food
    </h3>
  );
  expect(component.contains(slogan)).toEqual(true);
});
