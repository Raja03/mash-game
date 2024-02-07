export const removeElementAtIndex = <T>(arr: T[], index: number): T[] =>
  arr.slice(0, index).concat(arr.slice(index + 1));
