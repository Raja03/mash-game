import { removeElementAtIndex } from "../removeElementAtIndex";

describe("removeElementAtIndex", () => {
  const array = ["apple", "banana", "cherry"];

  it.each([
    [0, ["banana", "cherry"]],
    [1, ["apple", "cherry"]],
    [2, ["apple", "banana"]],
  ])("removes an element at a given index", (index, expected) => {
    const result = removeElementAtIndex(array, index);
    expect(result).toEqual(expected);
  });
});
