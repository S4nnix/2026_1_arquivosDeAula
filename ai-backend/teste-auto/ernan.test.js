const ernan = require('./ernan.js');

test("", () => {
    expect(ernan(5000, 1200)).toBe(3800);
});

test("", () => {
    expect(ernan(3000, 3000)).toBe(0);
});

test("", () => {
    expect(ernan(4500, 2000)).toBe(2500);
});

test("", () => {
    expect(ernan(4000, 5000)).toBe(-1000);
});

test("", () => {
    expect(ernan(0, 1000)).toBe(-1000);
});

test("", () => {
    expect(ernan(3500, 0)).toBe(3500);
});

test("", () => {
    expect(ernan(0, 0)).toBe(0);
});





