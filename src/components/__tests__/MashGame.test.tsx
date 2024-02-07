import { render, screen, fireEvent } from "@testing-library/react";
import MashGame from "../MashGame";

describe("MashGame component", () => {
  it("renders MASH title", () => {
    render(<MashGame />);
    const linkElement = screen.getByText(/MASH/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("updates input value on text change", () => {
    const { getByTestId } = render(
      <MashGame />
    );
    const input = getByTestId("input-0-0") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "New Value" } });
    expect(input.value).toBe("New Value");
  });

  it("displays error message for invalid number input", () => {
    const { getByTestId, getByText } = render(
      <MashGame />
    );
    const input = getByTestId("magic-number-input");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(getByText("Please enter a valid number")).toBeInTheDocument();
  });

  it("displays error message for out of range number input", () => {
    const { getByTestId, getByText } = render(
      <MashGame />
    );
    const input = getByTestId("magic-number-input");
    fireEvent.change(input, { target: { value: "20" } });
    expect(getByText("Number must be between 3 and 10")).toBeInTheDocument();
  });
});
