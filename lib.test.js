const { test, expect } = require("@jest/globals");
const lib = require("./lib");

//test avg
test("avg([4 6 8]) shoud be 6", () => {
    expect(lib.avg([4, 6, 8])).toBe(6);
});

//test fact
test("fact(5) shoud be 120", () => {
    expect(lib.fact(5)).toBe(120);
});

//test prime
test("prime(19) should be false", () => {
    expect(lib.prime(19)).toBe(true);
});
