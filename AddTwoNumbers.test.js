const addTwoNumbers = require("./AddTwoNumbers.js").addTwoNumbers;

describe("Add 2 Numbers", () => {
  test("9 + 7 = 16", () => {
      expect(addTwoNumbers(9, 7)).toBe(16);
  });
});
