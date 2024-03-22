const multiplyTwoNumbers = require("./MultiplyTwoNumbers.js").multiplyTwoNumbers;

describe("Multiply 2 Numbers", () => {
  test("10 * 4 = 40", () => {
      expect(multiplyTwoNumbers(10, 4)).toBe(40);
  });
});
