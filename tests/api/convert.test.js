import convert from "../../pages/api/convert";

let json = jest.fn();
let status = jest.fn(() => ({ json }));
let res = {};
let req = { status };

describe("Calling /api/convert with a single parameter containing an accepted number and unit", () => {
  beforeEach(() => {
    json = jest.fn();
    status = jest.fn(() => ({ json }));
    req = {};
    res = { status };
  });

  it("converts 'gal' to 'L' (1 gal to 3.78541 L)", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("converts 'L' to 'gal'", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("converts 'mi' to 'km' (1 mi to 1.60934 km)", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("converts 'km' to 'mi'", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("converts 'lbs' to 'kg' (1 lbs to 0.453592 kg)", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("converts 'kg' to 'lbs'", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("return all needed fields", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    //initNum, initUnit, returnNum, returnUnit, and string spelling out units in the format '{initNum} {initUnitString} converts to {returnNum} {returnUnitString}' with the result rounded to 5 decimals.
    expect(false).toBe(true);
  });
});

describe("Calling /api/convert with both uppercase and lowercase unit", () => {
  beforeEach(() => {
    json = jest.fn();
    status = jest.fn(() => ({ json }));
    req = {};
    res = { status };
  });

  it("works with Kg", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
  it("works with KG", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("works with Mi", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
  it("works with mi", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
  it("works with MI", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
  it("returns liter in uppercase", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
});

describe("Calling /api/convert with invalid parameters", () => {
  beforeEach(() => {
    json = jest.fn();
    status = jest.fn(() => ({ json }));
    req = {};
    res = { status };
  });

  it("return error for invalid unit", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe("invalid unit");
  });
  it("return error for invalid number", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe("invalid number");
  });
  it("return error for invalid unit and number", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe("invalid unit and number");
  });
});

describe("Calling /api/convert with weird numbers", () => {
  beforeEach(() => {
    json = jest.fn();
    status = jest.fn(() => ({ json }));
    req = {};
    res = { status };
  });

  it("default to 1 when no number is provided", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
  it("works with decimals", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });

  it("works with fractions", () => {
    convert(req, res);
    const data = json.mock.calls[0][0];

    expect(false).toBe(true);
  });
});
