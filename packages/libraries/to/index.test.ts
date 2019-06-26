import to from "./";

describe("Await to test", () => {
  it("should resolve promise with payload", async () => {
    type Payload = {
      title: string;
    };
    const payload: Payload = {
      title: "hello world"
    };

    const myPromiseMock = Promise.resolve(payload);

    const [err, data] = await to<Payload>(myPromiseMock);

    expect(err).toBeUndefined();
    expect(payload).toEqual(data);
  });

  it("should reject promise", async () => {
    const expected = "error any";
    const myPromiseMock = Promise.reject(expected);

    const [err, data] = await to(myPromiseMock);

    expect(err).toEqual(expected);
    expect(data).toBeUndefined();
  });
});
