import React from "react";
import "@testing-library/jest-dom/extend-expect";

import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
  act
} from "@testing-library/react";
import App from "../app/layout/App";
afterEach(() => cleanup());
describe("rendering the application", () => {
  test("At the start, render message that said press button", done => {
    const component = render(<App />);

    expect(component.container).toHaveTextContent(
      'Press the button "Fetch Cats"'
    );
    done();
  });
  test("When press button, loading appears", done => {
    const component = render(<App />);
    const button = component.getByText("Fetch Cats");
    fireEvent.click(button);
    expect(component.container).toHaveTextContent(
      "Fetching cats, please wait..."
    );
    done();
  });
  test("After loading appears, if there is no error, a lif will be rendered", async done => {
    const component = render(<App />);
    const button = component.getByText("Fetch Cats");

    fireEvent.click(button);
    //console.error starts here
    await waitForElement(() => component.container.querySelector(".cat-list"));
    const cats = component.container.querySelectorAll(".cat-list");
    expect(cats.length).toBe(5);

    done();
  });
});
