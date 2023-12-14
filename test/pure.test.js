import { randomly } from "../static/pure";

describe("Pure functional code", () => {
  describe("randomly", () => {
    it("should select an element from a single array", () => {
      expect(randomly(["a", "a", "a"])).toStrictEqual(["a"]);
      expect(randomly(["b", "b"], ["a", "a", "a"])).toStrictEqual(["b", "a"]);
    });
  });
});
