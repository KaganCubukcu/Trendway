import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Loading from "../loading";

test("Loading is working", () => {
  render(<Loading />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});