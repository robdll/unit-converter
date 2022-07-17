import hello from "../../pages/api/hello";

describe("Test Environment", () => {
  it("works", () => {
    expect(true).toBe(true);
  });
});

describe("Calling hello endpoint", () => {
  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json,
    };
  });

  it("return John Doe", () => {
    const req = {};
    const res = { status };
    hello(req, res);
    const data = json.mock.calls[0][0];
    expect(data.name).toEqual("John Doe");
  });
});
