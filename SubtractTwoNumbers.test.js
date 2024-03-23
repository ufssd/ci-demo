const subtractTwoNumbers = require("./SubtractTwoNumbers.js").subtractTwoNumbers;

describe("Subtract 2 Numbers", () => {
  test("10 - 7 = 3", () => {
      expect(subtractTwoNumbers(10, 7)).toBe(3);
  });
});
