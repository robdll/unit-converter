import convert from "../../pages/api/convert";
import convertController from "../../controllers/convertController";

let json = jest.fn();
let status = jest.fn(() => ({ json }));
let res = {};
let req = { status };

const convertHandler = new convertController();

describe("Unit Tests", () => {
  it("convertHandler should correctly read a whole number input", () => {
    let res = convertHandler.getNum("1gal");
    expect(res).toBe(1);
    res = convertHandler.getNum("2L");
    expect(res).toBe(2);
  });

  it("convertHandler should correctly read a decimal number input", () => {
    let res = convertHandler.getNum("1.2gal");
    expect(res).toBe(1.2);
    res = convertHandler.getNum("2.5L");
    expect(res).toBe(2.5);
  });

  it("convertHandler should correctly read a fractional input", () => {
    let res = convertHandler.getNum("1/5gal");
    expect(res).toBe(0.2);
    res = convertHandler.getNum("5/2L");
    expect(res).toBe(2.5);
  });

  it("convertHandler should correctly read a fractional input", () => {
    let res = convertHandler.getNum("1/5gal");
    expect(res).toBe(0.2);
    res = convertHandler.getNum("5/2L");
    expect(res).toBe(2.5);
  });

  it("convertHandler should correctly read a fractional input with a decimal", () => {
    let res = convertHandler.getNum("1.5/5gal");
    expect(res).toBe(0.3);
    res = convertHandler.getNum("5/2.5L");
    expect(res).toBe(2);
  });

  it("convertHandler should correctly return null on a double-fraction (i.e. 3/2/3)", () => {
    let res = convertHandler.getNum("3/2/3gal");
    expect(res).toBe(null);
  });

  it("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided", () => {
    let res = convertHandler.getNum("gal");
    expect(res).toBe(1);
    res = convertHandler.getNum("L");
    expect(res).toBe(1);
  });

  it("convertHandler should correctly read each valid input unit", () => {
    const tests = [
      "12gal",
      "2GAL",
      "3/5l",
      "2.2L",
      "1lbs",
      "LBS",
      "kg",
      "2.2Kg",
      "2/3KG",
      "12mi",
      "3Mi",
      "1/2MI",
      "1/2km",
      "2Km",
      "3KM",
    ];
    const expected = [
      "gal",
      "gal",
      "L",
      "L",
      "lbs",
      "lbs",
      "kg",
      "kg",
      "kg",
      "mi",
      "mi",
      "mi",
      "km",
      "km",
      "km",
    ];
    let res;
    tests.forEach((test, idx) => {
      res = convertHandler.getUnit(test);
      expect(res).toBe(expected[idx]);
    });
  });
});
