import { create } from "react-test-renderer";
import ProfileInfo from "./ProfileInfo";
import React from "react";

describe("ProfileInfo component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileInfo status="hello" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hello");
  });
});
