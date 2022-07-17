import hello from "../../pages/api/hello";

describe("Test Environment", () => {
  it("works", () => {
    expect(true).toBe(true);
  });
});

describe("Api calls", () => {
  const json = jest.fn();

  const status = jest.fn(() => {
    return {
      json,
    };
  });

  it("works too", () => {
    const req = {};
    const res = {
      status,
    };
    hello(req, res);
    console.log(json.mock);
    console.log(json.mock.calls);
    const data = json.mock.calls[0][0];
    expect(data.name).toEqual("John Doe");
  });
});
