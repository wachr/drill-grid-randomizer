jest.mock("../static/app");

describe("drill-grid-randomizer", () => {
  const drillData = require("../static/data.json");

  it("Can test locally", () => {
    expect(Object.keys(drillData)).toContain("Striking");
  });
});
